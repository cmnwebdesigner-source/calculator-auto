const API = {
      minime: "https://pretcarburant.ro/api/v1/preturi/minime",
      orase: "https://pretcarburant.ro/api/v1/preturi"
    };

    const fuelMeta = {
      motorina: {
        label: "Motorina",
        minimeKey: "motorina_standard",
        cityKey: "motorina",
        fallback: 9.60
      },
      benzina: {
        label: "Benzina 95",
        minimeKey: "benzina_standard",
        cityKey: "benzina",
        fallback: 9.36
      },
      gpl: {
        label: "GPL",
        minimeKey: "gpl",
        cityKey: "gpl",
        fallback: 4.40
      }
    };

    // Baza auto este incarcata din masini.js

const els = {};
    const state = {
      fuel: "motorina",
      route: "mixt",
      roundTrip: false,
      ac: false,
      passengers: 1,
      priceMode: "live",
      area: "national",
      apiDate: null,
      nationalPrices: null,
      cityPrices: [],
      carName: "Nespecificata",
      lastResult: null
    };

    function byId(id) {
      return document.getElementById(id);
    }

    function cacheElements() {
      [
        "brand", "model", "engine", "car-search", "base-consumption", "fuel-price", "price-area",
        "price-source-mode", "api-status", "api-meta", "price-note", "price-message",
        "distance", "roundtrip-btn", "ac-btn", "passengers", "pass-minus", "pass-plus",
        "total-cost", "summary-subtitle", "summary-car", "summary-distance",
        "summary-real-cons", "summary-liters", "summary-source", "open-receipt-btn",
        "receipt-btn", "receipt-modal", "close-receipt-btn", "download-pdf-btn",
        "local-updated", "card-motorina", "card-benzina", "card-gpl",
        "hero-refresh-btn", "refresh-prices-btn"
      ].forEach((id) => {
        els[id] = byId(id);
      });
    }

    function formatNumber(value, decimals = 2) {
      const number = Number(value);
      if (!Number.isFinite(number)) return (0).toFixed(decimals);
      return number.toFixed(decimals);
    }

    function formatPrice(value) {
      return formatNumber(value, 2);
    }

    function readNumber(input) {
      const value = Number.parseFloat(String(input.value).replace(",", "."));
      return Number.isFinite(value) && value > 0 ? value : 0;
    }

    function setMessage(type, icon, text) {
      els["price-message"].className = `message ${type || ""}`.trim();
      els["price-message"].innerHTML = `<i class="${icon}"></i> ${text}`;
    }

    function setApiStatus(type, html) {
      els["api-status"].className = `status-pill ${type || ""}`.trim();
      els["api-status"].innerHTML = html;
    }

    function getCarDatabase() {
      if (typeof carDatabase !== "undefined" && carDatabase && typeof carDatabase === "object") {
        return carDatabase;
      }
      console.error("masini.js nu este incarcat sau nu contine const carDatabase.");
      return {};
    }

    function normalizeSearchText(value) {
      return String(value || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, " ")
        .trim();
    }

    function populateCars() {
      const db = getCarDatabase();
      els.brand.innerHTML = '<option value="">Selecteaza marca</option>';
      Object.keys(db).sort((a, b) => a.localeCompare(b, "ro")).forEach((brand) => {
        els.brand.add(new Option(brand, brand));
      });
    }

    function buildCarSearchIndex() {
      const db = getCarDatabase();
      const items = [];
      Object.entries(db).forEach(([brand, models]) => {
        Object.entries(models || {}).forEach(([model, engines]) => {
          Object.entries(engines || {}).forEach(([engine, data]) => {
            const fuel = data?.f || "benzina";
            const consumption = Number(data?.c) || 0;
            const full = `${brand} ${model} ${engine} ${fuel} ${consumption}`;
            items.push({ brand, model, engine, fuel, consumption, search: normalizeSearchText(full) });
          });
        });
      });
      return items;
    }

    let carSearchIndex = [];

    function selectCarFromSearch(item) {
      if (!item) return;
      els.brand.value = item.brand;
      populateModels();
      els.model.value = item.model;
      populateEngines();
      els.engine.value = item.engine;
      applyEngine();
    }

    function initCarSearch() {
      const searchInput = els["car-search"];
      if (!searchInput) return;
      carSearchIndex = buildCarSearchIndex();
      let results = document.getElementById("car-search-results");
      if (!results) {
        results = document.createElement("div");
        results.className = "search-results";
        results.id = "car-search-results";
        searchInput.parentElement.appendChild(results);
      }
      const renderResults = () => {
        const query = normalizeSearchText(searchInput.value);
        results.innerHTML = "";
        if (query.length < 2) return;
        const words = query.split(" ").filter(Boolean);
        const matches = carSearchIndex
          .filter((item) => words.every((word) => item.search.includes(word)))
          .slice(0, 20);
        if (!matches.length) {
          results.innerHTML = `<div class="message warn"><i class="fa-solid fa-circle-info"></i> Nu am gasit masina. Alege manual marca/modelul sau scrie consumul.</div>`;
          return;
        }
        matches.forEach((item) => {
          const button = document.createElement("button");
          button.type = "button";
          button.className = "search-result";
          button.innerHTML = `<strong>${item.brand} ${item.model}</strong><span>${item.engine} • ${fuelMeta[item.fuel]?.label || item.fuel} • ${formatNumber(item.consumption, 1)} L/100km</span>`;
          button.addEventListener("click", () => {
            selectCarFromSearch(item);
            searchInput.value = `${item.brand} ${item.model} ${item.engine}`;
            results.innerHTML = "";
          });
          results.appendChild(button);
        });
      };
      searchInput.addEventListener("input", renderResults);
      searchInput.addEventListener("search", renderResults);
      document.addEventListener("click", (event) => {
        if (!searchInput.parentElement.contains(event.target)) results.innerHTML = "";
      });
    }

    function populateModels() {
      const brand = els.brand.value;
      els.model.innerHTML = '<option value="">Selecteaza modelul</option>';
      els.engine.innerHTML = '<option value="">Alege motorizarea</option>';
      els.model.disabled = !brand;
      els.engine.disabled = true;
      state.carName = "Nespecificata";

      if (brand) {
        Object.keys(getCarDatabase()[brand] || {}).sort((a, b) => a.localeCompare(b, "ro")).forEach((model) => {
          els.model.add(new Option(model, model));
        });
      }

      updateAll();
    }

    function populateEngines() {
      const brand = els.brand.value;
      const model = els.model.value;
      els.engine.innerHTML = '<option value="">Alege motorizarea</option>';
      els.engine.disabled = !(brand && model);
      state.carName = brand && model ? `${brand} ${model}` : "Nespecificata";

      if (brand && model) {
        Object.keys((getCarDatabase()[brand] || {})[model] || {}).sort((a, b) => a.localeCompare(b, "ro")).forEach((engine) => {
          els.engine.add(new Option(engine, engine));
        });
      }

      updateAll();
    }

    function applyEngine() {
      const brand = els.brand.value;
      const model = els.model.value;
      const engine = els.engine.value;

      if (brand && model && engine) {
        const data = ((getCarDatabase()[brand] || {})[model] || {})[engine];
        if (!data) return;
        els["base-consumption"].value = data.c;
        state.carName = `${brand} ${model} - ${engine}`;
        setFuelType(data.f, { keepLive: true });
      } else {
        state.carName = brand && model ? `${brand} ${model}` : "Nespecificata";
        updateAll();
      }
    }

    function setFuelType(type, options = {}) {
      state.fuel = type;
      document.querySelectorAll("[data-fuel]").forEach((button) => {
        const active = button.dataset.fuel === type;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
      });

      if (options.keepLive !== false && state.priceMode === "live") {
        applyLivePrice();
      } else {
        updateAll();
      }
    }

    function setRoute(route) {
      state.route = route;
      document.querySelectorAll("[data-route]").forEach((button) => {
        const active = button.dataset.route === route;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
      });
      updateAll();
    }

    function toggleRoundTrip() {
      state.roundTrip = !state.roundTrip;
      els["roundtrip-btn"].classList.toggle("active", state.roundTrip);
      els["roundtrip-btn"].setAttribute("aria-pressed", String(state.roundTrip));
      els["roundtrip-btn"].innerHTML = state.roundTrip
        ? '<i class="fa-solid fa-check"></i><span>Dus-intors activ</span>'
        : '<i class="fa-solid fa-arrow-right-arrow-left"></i><span>Dus-intors oprit</span>';
      updateAll();
    }

    function toggleAc() {
      state.ac = !state.ac;
      els["ac-btn"].classList.toggle("active", state.ac);
      els["ac-btn"].setAttribute("aria-pressed", String(state.ac));
      els["ac-btn"].innerHTML = state.ac
        ? '<i class="fa-solid fa-snowflake"></i><span>AC pornit</span>'
        : '<i class="fa-solid fa-snowflake"></i><span>AC oprit</span>';
      updateAll();
    }

    function changePassengers(delta) {
      state.passengers = Math.min(9, Math.max(1, state.passengers + delta));
      els.passengers.textContent = state.passengers;
      updateAll();
    }

    function getNationalPrice(type = state.fuel) {
      const meta = fuelMeta[type];
      return state.nationalPrices?.[meta.minimeKey]?.mediu ?? meta.fallback;
    }

    function getSelectedCounty() {
      return state.area && state.area.startsWith("county:") ? state.area.replace("county:", "") : null;
    }

    function getSelectedCity() {
      if (state.area === "national" || (state.area && state.area.startsWith("county:"))) return null;
      return state.cityPrices.find((item) => item.slug === state.area) || null;
    }

    function getLivePrice(type = state.fuel) {
      const meta = fuelMeta[type];
      const city = getSelectedCity();
      if (city && Number.isFinite(Number(city[meta.cityKey]))) {
        return Number(city[meta.cityKey]);
      }
      return getNationalPrice(type);
    }

    function getPriceSourceLabel() {
      if (state.priceMode === "manual") return "Manual";
      const city = getSelectedCity();
      const county = getSelectedCounty();
      if (city) return `Live API - ${city.oras}`;
      if (county) return `Judet ${county} - medie nationala`;
      return "Live API - medie nationala";
    }

    function applyLivePrice() {
      if (state.priceMode !== "live") {
        updateAll();
        return;
      }

      const price = getLivePrice();
      els["fuel-price"].value = formatPrice(price);
      const city = getSelectedCity();
      const areaText = city ? city.oras : (String(state.area).startsWith("county:") ? `${String(state.area).replace("county:", "")} / media nationala` : "media nationala");
      els["price-note"].textContent = `${fuelMeta[state.fuel].label}: ${formatPrice(price)} Lei/L, ${areaText}.`;
      setMessage("success", "fa-solid fa-circle-check", `Pret aplicat automat pentru ${areaText}.`);
      updateAll();
    }

    function updatePriceMode() {
      state.priceMode = els["price-source-mode"].value;
      if (state.priceMode === "live") {
        applyLivePrice();
      } else {
        els["price-note"].textContent = "Mod manual: pretul introdus de tine ramane folosit in calcul.";
        setMessage("warn", "fa-solid fa-pen", "Pretul live este oprit pentru acest calcul.");
        updateAll();
      }
    }

    function updateArea() {
      state.area = els["price-area"].value;
      if (state.priceMode === "live") {
        applyLivePrice();
      } else {
        updateAll();
      }
    }

    function manualPriceEdited() {
      if (state.priceMode !== "manual") {
        state.priceMode = "manual";
        els["price-source-mode"].value = "manual";
        els["price-note"].textContent = "Pret schimbat manual. Poti reveni la Live API din selector.";
        setMessage("warn", "fa-solid fa-pen", "Ai trecut pe pret manual.");
      }
      updateAll();
    }

    async function fetchJson(url) {
      const response = await fetch(`${url}${url.includes("?") ? "&" : "?"}_=${Date.now()}`, {
        headers: { "Accept": "application/json" }
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json();
    }

    async function loadPrices() {
      setApiStatus("", '<i class="fa-solid fa-circle-notch fa-spin"></i> Se incarca');
      els["api-meta"].textContent = "Sincronizare cu API-ul de preturi...";
      setMessage("", "fa-solid fa-satellite-dish", "Se actualizeaza preturile live.");

      try {
        const [national, cities] = await Promise.all([
          fetchJson(API.minime),
          fetchJson(API.orase)
        ]);

        if (national.status !== "ok" || !national.preturi) {
          throw new Error("Raspuns invalid pentru preturile nationale");
        }

        state.apiDate = national.data || cities.data || null;
        state.nationalPrices = national.preturi;
        state.cityPrices = Array.isArray(cities.rezultate) ? cities.rezultate : [];

        populateAreas();
        renderLiveCards();
        setApiStatus("", '<i class="fa-solid fa-signal"></i> Live');
        els["api-meta"].textContent = `Date API pentru ${state.apiDate || "azi"}; endpoint-urile publice au cache de 5 minute.`;
        els["local-updated"].textContent = new Date().toLocaleString("ro-RO", { dateStyle: "medium", timeStyle: "short" });

        if (state.priceMode === "live") {
          applyLivePrice();
        } else {
          updateAll();
        }
      } catch (error) {
        console.warn("Nu s-au putut incarca preturile live:", error);
        state.nationalPrices = {
          motorina_standard: { mediu: fuelMeta.motorina.fallback },
          benzina_standard: { mediu: fuelMeta.benzina.fallback },
          gpl: { mediu: fuelMeta.gpl.fallback }
        };
        state.cityPrices = [];
        populateAreas();
        renderLiveCards();
        setApiStatus("error", '<i class="fa-solid fa-triangle-exclamation"></i> Fallback');
        els["api-meta"].textContent = "API indisponibil temporar; se folosesc ultimele valori fallback din aplicatie.";
        setMessage("error", "fa-solid fa-triangle-exclamation", "Nu am putut incarca preturile live. Calculul ramane functional.");
        if (state.priceMode === "live") applyLivePrice();
      }
    }

    function populateAreas() {
      const selected = state.area;
      els["price-area"].innerHTML = '<option value="national">Medie nationala</option>';

      if (Array.isArray(window.romanianCounties) && window.romanianCounties.length) {
        const countyGroup = document.createElement("optgroup");
        countyGroup.label = "Judete - medie nationala";
        window.romanianCounties
          .slice()
          .sort((a, b) => String(a).localeCompare(String(b), "ro"))
          .forEach((county) => {
            countyGroup.appendChild(new Option(county, `county:${county}`));
          });
        els["price-area"].appendChild(countyGroup);
      }

      if (state.cityPrices.length) {
        const cityGroup = document.createElement("optgroup");
        cityGroup.label = "Orase disponibile prin API";
        state.cityPrices
          .slice()
          .sort((a, b) => String(a.oras).localeCompare(String(b.oras), "ro"))
          .forEach((city) => {
            cityGroup.appendChild(new Option(`${city.oras} (${city.judet})`, city.slug));
          });
        els["price-area"].appendChild(cityGroup);
      }

      els["price-area"].value = [...els["price-area"].options].some((option) => option.value === selected)
        ? selected
        : "national";
      state.area = els["price-area"].value;
    }

    function renderLiveCards() {
      const motorina = getNationalPrice("motorina");
      const benzina = getNationalPrice("benzina");
      const gpl = getNationalPrice("gpl");

      els["card-motorina"].textContent = formatPrice(motorina);
      els["card-benzina"].textContent = formatPrice(benzina);
      els["card-gpl"].textContent = formatPrice(gpl);
    }

    function calculate() {
      const distance = readNumber(els.distance);
      const baseConsumption = readNumber(els["base-consumption"]);
      const fuelPrice = readNumber(els["fuel-price"]);
      const realDistance = state.roundTrip ? distance * 2 : distance;

      const routeFactor = state.route === "urban" ? 1.2 : state.route === "extra" ? 0.9 : 1;
      const acFactor = state.ac ? 1.05 : 1;
      const passengerAdd = Math.max(0, state.passengers - 1) * 0.1;
      const realConsumption = baseConsumption > 0 ? (baseConsumption * routeFactor * acFactor) + passengerAdd : 0;
      const liters = realDistance > 0 && realConsumption > 0 ? (realDistance / 100) * realConsumption : 0;
      const total = liters * fuelPrice;

      const routeLabel = state.route === "urban" ? "Oras (+20%)" : state.route === "extra" ? "Extern (-10%)" : "Mixt";
      const routeAdjust = state.route === "urban" ? "+20%" : state.route === "extra" ? "-10%" : "0%";
      const source = getPriceSourceLabel();

      state.lastResult = {
        distance,
        realDistance,
        baseConsumption,
        fuelPrice,
        routeFactor,
        acFactor,
        passengerAdd,
        realConsumption,
        liters,
        total,
        routeLabel,
        routeAdjust,
        source
      };

      return state.lastResult;
    }

    function updateAll() {
      const result = calculate();
      const car = state.carName || "Nespecificata";
      const fuelLabel = fuelMeta[state.fuel].label;

      els["total-cost"].textContent = formatPrice(result.total);
      els["summary-subtitle"].textContent = result.total > 0
        ? `${formatPrice(result.liters)} L x ${formatPrice(result.fuelPrice)} Lei/L`
        : "Completeaza distanta si consumul.";
      els["summary-car"].textContent = car;
      els["summary-distance"].textContent = formatNumber(result.realDistance, result.realDistance % 1 === 0 ? 0 : 1);
      els["summary-real-cons"].textContent = formatNumber(result.realConsumption, 1);
      els["summary-liters"].textContent = formatNumber(result.liters, 2);
      els["summary-source"].textContent = result.source;

      updateReceipt(result, car, fuelLabel);
      updatePdf(result, car, fuelLabel);
    }

    function updateReceipt(result, car, fuelLabel) {
      const fields = {
        "r-car": car,
        "r-distance": formatNumber(result.realDistance, result.realDistance % 1 === 0 ? 0 : 1),
        "r-base": formatNumber(result.baseConsumption, 1),
        "r-route": result.routeLabel,
        "r-ac": state.ac ? "Pornit (+5%)" : "Oprit",
        "r-pass": `+${formatNumber(result.passengerAdd, 1)}`,
        "r-real": formatNumber(result.realConsumption, 1),
        "r-liters": formatNumber(result.liters, 2),
        "r-price": formatNumber(result.fuelPrice, 2),
        "r-source": result.source,
        "r-formula": `${formatNumber(result.liters, 2)} L x ${formatNumber(result.fuelPrice, 2)} Lei`,
        "r-total": formatNumber(result.total, 2)
      };

      Object.entries(fields).forEach(([id, value]) => {
        byId(id).textContent = value;
      });
    }

    function updatePdf(result, car, fuelLabel) {
      const fields = {
        "pdf-car": car,
        "pdf-base": formatNumber(result.baseConsumption, 1),
        "pdf-fuel": fuelLabel,
        "pdf-distance": formatNumber(result.realDistance, result.realDistance % 1 === 0 ? 0 : 1),
        "pdf-price": formatNumber(result.fuelPrice, 2),
        "pdf-source": result.source,
        "pdf-t-base": formatNumber(result.baseConsumption, 1),
        "pdf-t-route": result.routeAdjust,
        "pdf-t-ac": state.ac ? "+5%" : "0%",
        "pdf-t-pass": `+${formatNumber(result.passengerAdd, 1)}`,
        "pdf-t-real": formatNumber(result.realConsumption, 1),
        "pdf-liters": formatNumber(result.liters, 2),
        "pdf-total": formatNumber(result.total, 2)
      };

      Object.entries(fields).forEach(([id, value]) => {
        byId(id).textContent = value;
      });
    }

    function openReceipt() {
      updateAll();
      els["receipt-modal"].classList.add("open");
      els["close-receipt-btn"].focus();
    }

    function closeReceipt() {
      els["receipt-modal"].classList.remove("open");
    }
async function loadPdfLogoDataUrl() {
      const response = await fetch("assets/logo.png", { cache: "force-cache" });
      if (!response.ok) throw new Error("Logo-ul nu s-a putut incarca.");
      const blob = await response.blob();
      return await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    }

    function isIOSDevice() {
      const ua = navigator.userAgent || "";
      return /iPad|iPhone|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    }

    async function savePdfOnDevice(doc, filename, preOpenedWindow = null) {
      const blob = doc.output("blob");
      const blobUrl = URL.createObjectURL(blob);

      const openInWindow = () => {
        if (preOpenedWindow && !preOpenedWindow.closed) {
          preOpenedWindow.location.href = blobUrl;
          return true;
        }
        const opened = window.open(blobUrl, "_blank");
        return Boolean(opened);
      };

      try {
        if (window.File && navigator.canShare && navigator.share) {
          const file = new File([blob], filename, { type: "application/pdf" });
          if (navigator.canShare({ files: [file] })) {
            await navigator.share({
              files: [file],
              title: "Deviz cost combustibil",
              text: "PDF generat de Cost Combustibil Live"
            });
            setTimeout(() => URL.revokeObjectURL(blobUrl), 60000);
            return;
          }
        }
      } catch (shareError) {
        console.warn("Share PDF indisponibil, folosesc fallback:", shareError);
      }

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = filename;
      link.rel = "noopener";
      link.style.display = "none";
      document.body.appendChild(link);

      if (isIOSDevice()) {
        const opened = openInWindow();
        if (!opened) {
          link.click();
        }
      } else {
        link.click();
      }

      setTimeout(() => {
        URL.revokeObjectURL(blobUrl);
        link.remove();
      }, 60000);
    }

    async function generatePDF() {
      updateAll();

      const pdfWindow = isIOSDevice() ? window.open("", "_blank") : null;
      if (pdfWindow) {
        pdfWindow.document.write("<p style='font-family:system-ui;padding:20px'>Se genereaza PDF...</p>");
      }

      const button = els["download-pdf-btn"];
      const previous = button.innerHTML;

      button.disabled = true;
      button.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Se genereaza PDF';

      try {
        const JsPdfCtor = window.jspdf && window.jspdf.jsPDF;
        if (!JsPdfCtor) {
          throw new Error("Biblioteca jsPDF nu s-a incarcat corect.");
        }

        const result = state.lastResult || calculate();
        const car = state.carName || "Nespecificata";
        const fuelLabel = fuelMeta[state.fuel].label;
        const doc = new JsPdfCtor({ unit: "mm", format: "a4", orientation: "portrait" });
        const pageWidth = doc.internal.pageSize.getWidth();
        const margin = 15;
        const contentWidth = pageWidth - margin * 2;
        let y = 18;

        const split = (value, width) => doc.splitTextToSize(String(value), width);
        const line = (x1, y1, x2, y2, color = [220, 228, 226]) => {
          doc.setDrawColor(...color);
          doc.line(x1, y1, x2, y2);
        };
        const textBlock = (value, x, yPos, width, fontSize = 10.5, color = [17, 24, 39], weight = "normal", lineHeight = 4.6) => {
          doc.setFont("helvetica", weight);
          doc.setFontSize(fontSize);
          doc.setTextColor(...color);
          const lines = split(value, width);
          doc.text(lines, x, yPos);
          return lines.length * lineHeight;
        };
        const infoCard = (title, lines, x, yPos, width, minHeight = 36) => {
          let cursor = yPos + 8;
          doc.setFillColor(246, 248, 247);
          doc.setDrawColor(220, 228, 226);
          doc.roundedRect(x, yPos, width, minHeight, 4, 4, "FD");
          doc.setFont("helvetica", "bold");
          doc.setFontSize(10);
          doc.setTextColor(15, 118, 110);
          doc.text(title.toUpperCase(), x + 6, cursor);
          cursor += 5;
          doc.setFont("helvetica", "bold");
          doc.setFontSize(12);
          doc.setTextColor(17, 24, 39);
          const first = split(lines[0], width - 12);
          doc.text(first, x + 6, cursor);
          cursor += first.length * 4.8 + 1;
          doc.setFont("helvetica", "normal");
          doc.setFontSize(10.5);
          doc.setTextColor(71, 85, 105);
          for (const item of lines.slice(1)) {
            const rows = split(item, width - 12);
            doc.text(rows, x + 6, cursor);
            cursor += rows.length * 4.4 + 1;
          }
          return Math.max(minHeight, cursor - yPos + 3);
        };

        doc.setFillColor(255, 255, 255);
        doc.rect(0, 0, pageWidth, doc.internal.pageSize.getHeight(), "F");

        doc.setFont("helvetica", "bold");
        doc.setFontSize(24);
        doc.setTextColor(17, 24, 39);
        doc.text("Deviz cost combustibil", margin, y);

        doc.setFont("helvetica", "normal");
        doc.setFontSize(10.5);
        doc.setTextColor(100, 116, 139);
        doc.text("Generat de Cost Combustibil Live", margin, y + 6.5);

        try {
          const logoDataUrl = await loadPdfLogoDataUrl();
          doc.addImage(logoDataUrl, "PNG", pageWidth - 31, 10, 18, 18);
        } catch (logoError) {
          console.warn("Logo PDF indisponibil:", logoError);
          doc.setFillColor(229, 243, 239);
          doc.setDrawColor(15, 118, 110);
          doc.roundedRect(pageWidth - 28, 12, 13, 13, 3, 3, "FD");
          doc.setFont("helvetica", "bold");
          doc.setFontSize(12);
          doc.setTextColor(15, 118, 110);
          doc.text("C", pageWidth - 21.5, 20.7, { align: "center" });
        }

        line(margin, 30, pageWidth - margin, 30, [15, 118, 110]);
        y = 38;

        const leftX = margin;
        const rightX = margin + (contentWidth / 2) + 4;
        const boxWidth = (contentWidth / 2) - 4;
        const leftHeight = infoCard("Autoturism", [car, `Consum baza: ${formatNumber(result.baseConsumption, 1)} L/100km`, `Combustibil: ${fuelLabel}`], leftX, y, boxWidth, 38);
        const rightHeight = infoCard("Calatorie", [`Distanta: ${formatNumber(result.realDistance, result.realDistance % 1 === 0 ? 0 : 1)} km`, `Pret: ${formatNumber(result.fuelPrice, 2)} Lei/L`, `Sursa pret: ${result.source}`], rightX, y, boxWidth, 38);
        y += Math.max(leftHeight, rightHeight) + 12;

        doc.setFont("helvetica", "bold");
        doc.setFontSize(13.5);
        doc.setTextColor(17, 24, 39);
        doc.text("Calcul consum", margin, y);
        y += 5;

        const rows = [
          ["Consum baza", `${formatNumber(result.baseConsumption, 1)} L/100km`],
          ["Ajustare traseu", result.routeAdjust],
          ["Ajustare AC", state.ac ? "+5%" : "0%"],
          ["Ajustare pasageri", `+${formatNumber(result.passengerAdd, 1)} L/100km`],
          ["Consum real estimat", `${formatNumber(result.realConsumption, 1)} L/100km`],
          ["Volum combustibil", `${formatNumber(result.liters, 2)} L`],
          ["Formula", `${formatNumber(result.liters, 2)} L x ${formatNumber(result.fuelPrice, 2)} Lei/L`]
        ];

        y += 3;
        rows.forEach(([label, value], index) => {
          const highlight = label === "Consum real estimat";
          if (highlight) {
            doc.setFillColor(229, 243, 239);
            doc.roundedRect(margin, y - 5, contentWidth, 10, 2.5, 2.5, "F");
          }
          doc.setFont("helvetica", highlight ? "bold" : "normal");
          doc.setFontSize(10.8);
          doc.setTextColor(...(highlight ? [15, 78, 71] : [71, 85, 105]));
          doc.text(label, margin + 1, y + 1.5);
          doc.setFont("helvetica", "bold");
          doc.setTextColor(...(highlight ? [15, 78, 71] : [17, 24, 39]));
          doc.text(String(value), pageWidth - margin - 1, y + 1.5, { align: "right" });
          y += 8.6;
          if (!highlight && index < rows.length - 1) {
            line(margin, y - 2.8, pageWidth - margin, y - 2.8);
          }
        });

        y += 4;
        doc.setFillColor(17, 24, 39);
        doc.roundedRect(margin, y, contentWidth, 30, 4, 4, "F");
        doc.setFont("helvetica", "bold");
        doc.setFontSize(9.5);
        doc.setTextColor(148, 163, 184);
        doc.text("Cost final", margin + 8, y + 8);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(10.5);
        doc.setTextColor(255, 255, 255);
        doc.text(`Volum necesar: ${formatNumber(result.liters, 2)} L`, margin + 8, y + 16);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(24);
        doc.text(`${formatNumber(result.total, 2)} RON`, pageWidth - margin - 8, y + 18, { align: "right" });

        y += 38;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(8.8);
        doc.setTextColor(148, 163, 184);
        const footer = "Document informativ, nu document fiscal. Verifica intotdeauna pretul afisat la pompa.";
        doc.text(split(footer, contentWidth), pageWidth / 2, y, { align: "center" });

        await savePdfOnDevice(doc, "Deviz_Cost_Combustibil.pdf");
      } catch (error) {
        if (pdfWindow && !pdfWindow.closed) pdfWindow.close();
        console.error("PDF error:", error);
        alert("PDF-ul nu s-a putut genera corect. Reincarca pagina si incearca din nou.");
      } finally {
        button.disabled = false;
        button.innerHTML = previous;
      }
    }

    function bindEvents() {
      els.brand.addEventListener("change", populateModels);
      els.model.addEventListener("change", populateEngines);
      els.engine.addEventListener("change", applyEngine);
      els["base-consumption"].addEventListener("input", updateAll);
      els.distance.addEventListener("input", updateAll);
      els["fuel-price"].addEventListener("input", manualPriceEdited);
      els["price-area"].addEventListener("change", updateArea);
      els["price-source-mode"].addEventListener("change", updatePriceMode);
      els["roundtrip-btn"].addEventListener("click", toggleRoundTrip);
      els["ac-btn"].addEventListener("click", toggleAc);
      els["pass-minus"].addEventListener("click", () => changePassengers(-1));
      els["pass-plus"].addEventListener("click", () => changePassengers(1));
      els["receipt-btn"].addEventListener("click", openReceipt);
      els["open-receipt-btn"].addEventListener("click", openReceipt);
      els["close-receipt-btn"].addEventListener("click", closeReceipt);
      els["download-pdf-btn"].addEventListener("click", generatePDF);
      els["refresh-prices-btn"].addEventListener("click", loadPrices);
      els["hero-refresh-btn"].addEventListener("click", loadPrices);

      document.querySelectorAll("[data-fuel]").forEach((button) => {
        button.addEventListener("click", () => setFuelType(button.dataset.fuel));
      });

      document.querySelectorAll("[data-route]").forEach((button) => {
        button.addEventListener("click", () => setRoute(button.dataset.route));
      });

      els["receipt-modal"].addEventListener("click", (event) => {
        if (event.target === els["receipt-modal"]) closeReceipt();
      });

      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && els["receipt-modal"].classList.contains("open")) {
          closeReceipt();
        }
      });
    }

    function init() {
      cacheElements();
      if (typeof carDatabase === "undefined") {
        console.error("masini.js nu este incarcat. Verifica daca fisierul masini.js este langa index.html si este chemat inainte de script.js.");
        setTimeout(() => alert("Nu s-a incarcat masini.js. Verifica numele fisierului si ordinea scripturilor."), 300);
        return;
      }
      populateCars();
      initCarSearch();
      bindEvents();
      els["price-source-mode"].value = state.priceMode;
      els["price-area"].value = state.area;
      els["fuel-price"].value = formatPrice(fuelMeta.motorina.fallback);
      els["local-updated"].textContent = new Date().toLocaleString("ro-RO", { dateStyle: "medium", timeStyle: "short" });
      setRoute(state.route);
      setFuelType(state.fuel, { keepLive: false });
      loadPrices();
      updateAll();
    }

    document.addEventListener("DOMContentLoaded", init);

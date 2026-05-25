// masini.js
// Baza de date auto pentru calculator. Valorile de consum sunt orientative.
// Poți adăuga modele noi respectând formatul: "Motorizare": { f: "benzina|motorina|gpl", c: 6.5 }

const carDatabase = {
  "Abarth": {
    "500": {
      "1.0 benzina": {
        "f": "benzina",
        "c": 5.2
      },
      "1.2 benzina": {
        "f": "benzina",
        "c": 5.6
      },
      "1.4 benzina": {
        "f": "benzina",
        "c": 6.0
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.6
      },
      "1.5 dCi / TDI / diesel": {
        "f": "motorina",
        "c": 4.4
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.7
      },
      "GPL / ECO-G": {
        "f": "gpl",
        "c": 7.2
      }
    },
    "595": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "695": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "124 Spider": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    }
  },
  "Alfa Romeo": {
    "145": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "146": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "147": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "156": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "159": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Giulietta": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Giulia": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Stelvio": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Tonale": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Mito": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    }
  },
  "Audi": {
    "A1": {
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "A2": {
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "A3": {
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "A4": {
      "1.8 TFSI": {
        "f": "benzina",
        "c": 6.8
      },
      "2.0 TFSI": {
        "f": "benzina",
        "c": 7.2
      },
      "2.0 TDI 143/150/190 CP": {
        "f": "motorina",
        "c": 5.2
      },
      "3.0 TDI": {
        "f": "motorina",
        "c": 6.6
      }
    },
    "A5": {
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "A6": {
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "A7": {
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "A8": {
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "Q2": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "Q3": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "Q5": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "Q7": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "Q8": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "TT": {
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    }
  },
  "BMW": {
    "Seria 1": {
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "Seria 2": {
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "Seria 3": {
      "316i": {
        "f": "benzina",
        "c": 6.4
      },
      "318i": {
        "f": "benzina",
        "c": 6.6
      },
      "320i": {
        "f": "benzina",
        "c": 6.9
      },
      "330i": {
        "f": "benzina",
        "c": 7.3
      },
      "316d": {
        "f": "motorina",
        "c": 4.5
      },
      "318d": {
        "f": "motorina",
        "c": 4.8
      },
      "320d": {
        "f": "motorina",
        "c": 5.0
      },
      "330d": {
        "f": "motorina",
        "c": 5.8
      }
    },
    "Seria 4": {
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "Seria 5": {
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "Seria 6": {
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "Seria 7": {
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "X1": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "X2": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "X3": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "X4": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "X5": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "X6": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "Z4": {
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    }
  },
  "Chevrolet": {
    "Aveo": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Spark": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Cruze": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Lacetti": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Captiva": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Orlando": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Trax": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Malibu": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Camaro": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    }
  },
  "Citroen": {
    "C1": {
      "1.0 benzina": {
        "f": "benzina",
        "c": 5.2
      },
      "1.2 benzina": {
        "f": "benzina",
        "c": 5.6
      },
      "1.4 benzina": {
        "f": "benzina",
        "c": 6.0
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.6
      },
      "1.5 dCi / TDI / diesel": {
        "f": "motorina",
        "c": 4.4
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.7
      },
      "GPL / ECO-G": {
        "f": "gpl",
        "c": 7.2
      }
    },
    "C2": {
      "1.0 benzina": {
        "f": "benzina",
        "c": 5.2
      },
      "1.2 benzina": {
        "f": "benzina",
        "c": 5.6
      },
      "1.4 benzina": {
        "f": "benzina",
        "c": 6.0
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.6
      },
      "1.5 dCi / TDI / diesel": {
        "f": "motorina",
        "c": 4.4
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.7
      },
      "GPL / ECO-G": {
        "f": "gpl",
        "c": 7.2
      }
    },
    "C3": {
      "1.0 benzina": {
        "f": "benzina",
        "c": 5.2
      },
      "1.2 benzina": {
        "f": "benzina",
        "c": 5.6
      },
      "1.4 benzina": {
        "f": "benzina",
        "c": 6.0
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.6
      },
      "1.5 dCi / TDI / diesel": {
        "f": "motorina",
        "c": 4.4
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.7
      },
      "GPL / ECO-G": {
        "f": "gpl",
        "c": 7.2
      }
    },
    "C3 Aircross": {
      "1.0 benzina": {
        "f": "benzina",
        "c": 5.2
      },
      "1.2 benzina": {
        "f": "benzina",
        "c": 5.6
      },
      "1.4 benzina": {
        "f": "benzina",
        "c": 6.0
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.6
      },
      "1.5 dCi / TDI / diesel": {
        "f": "motorina",
        "c": 4.4
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.7
      },
      "GPL / ECO-G": {
        "f": "gpl",
        "c": 7.2
      }
    },
    "C4": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "C4 Cactus": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "C5": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "C5 Aircross": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Berlingo": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "DS3": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    }
  },
  "Cupra": {
    "Leon": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Formentor": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Ateca": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.2
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 6.5
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.0
      }
    }
  },
  "Dacia": {
    "Logan": {
      "1.0 SCe 65 CP": {
        "f": "benzina",
        "c": 5.4
      },
      "1.0 TCe 90 CP": {
        "f": "benzina",
        "c": 5.2
      },
      "1.0 ECO-G GPL 100 CP": {
        "f": "gpl",
        "c": 7.0
      },
      "1.5 dCi 75/90 CP": {
        "f": "motorina",
        "c": 4.2
      }
    },
    "Sandero": {
      "1.0 benzina": {
        "f": "benzina",
        "c": 5.2
      },
      "1.2 benzina": {
        "f": "benzina",
        "c": 5.6
      },
      "1.4 benzina": {
        "f": "benzina",
        "c": 6.0
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.6
      },
      "1.5 dCi / TDI / diesel": {
        "f": "motorina",
        "c": 4.4
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.7
      },
      "GPL / ECO-G": {
        "f": "gpl",
        "c": 7.2
      }
    },
    "Sandero Stepway": {
      "1.0 benzina": {
        "f": "benzina",
        "c": 5.2
      },
      "1.2 benzina": {
        "f": "benzina",
        "c": 5.6
      },
      "1.4 benzina": {
        "f": "benzina",
        "c": 6.0
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.6
      },
      "1.5 dCi / TDI / diesel": {
        "f": "motorina",
        "c": 4.4
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.7
      },
      "GPL / ECO-G": {
        "f": "gpl",
        "c": 7.2
      }
    },
    "Duster": {
      "1.0 ECO-G GPL": {
        "f": "gpl",
        "c": 7.8
      },
      "1.2 TCe": {
        "f": "benzina",
        "c": 6.4
      },
      "1.3 TCe": {
        "f": "benzina",
        "c": 6.6
      },
      "1.5 dCi / Blue dCi": {
        "f": "motorina",
        "c": 5.2
      }
    },
    "Jogger": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Lodgy": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Dokker": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Spring": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    }
  },
  "Daewoo": {
    "Matiz": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Tico": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Cielo": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Nexia": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Lanos": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Nubira": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Leganza": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    }
  },
  "Daihatsu": {
    "Sirion": {
      "1.0 benzina": {
        "f": "benzina",
        "c": 5.2
      },
      "1.2 benzina": {
        "f": "benzina",
        "c": 5.6
      },
      "1.4 benzina": {
        "f": "benzina",
        "c": 6.0
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.6
      },
      "1.5 dCi / TDI / diesel": {
        "f": "motorina",
        "c": 4.4
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.7
      },
      "GPL / ECO-G": {
        "f": "gpl",
        "c": 7.2
      }
    },
    "Terios": {
      "1.0 benzina": {
        "f": "benzina",
        "c": 5.2
      },
      "1.2 benzina": {
        "f": "benzina",
        "c": 5.6
      },
      "1.4 benzina": {
        "f": "benzina",
        "c": 6.0
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.6
      },
      "1.5 dCi / TDI / diesel": {
        "f": "motorina",
        "c": 4.4
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.7
      },
      "GPL / ECO-G": {
        "f": "gpl",
        "c": 7.2
      }
    },
    "Cuore": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Materia": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    }
  },
  "Dodge": {
    "Caliber": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Journey": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Nitro": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Charger": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Challenger": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Durango": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    }
  },
  "DS Automobiles": {
    "DS3": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "DS4": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "DS5": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "DS7 Crossback": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    }
  },
  "Fiat": {
    "500": {
      "1.0 benzina": {
        "f": "benzina",
        "c": 5.2
      },
      "1.2 benzina": {
        "f": "benzina",
        "c": 5.6
      },
      "1.4 benzina": {
        "f": "benzina",
        "c": 6.0
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.6
      },
      "1.5 dCi / TDI / diesel": {
        "f": "motorina",
        "c": 4.4
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.7
      },
      "GPL / ECO-G": {
        "f": "gpl",
        "c": 7.2
      }
    },
    "500X": {
      "1.0 benzina": {
        "f": "benzina",
        "c": 5.2
      },
      "1.2 benzina": {
        "f": "benzina",
        "c": 5.6
      },
      "1.4 benzina": {
        "f": "benzina",
        "c": 6.0
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.6
      },
      "1.5 dCi / TDI / diesel": {
        "f": "motorina",
        "c": 4.4
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.7
      },
      "GPL / ECO-G": {
        "f": "gpl",
        "c": 7.2
      }
    },
    "500L": {
      "1.0 benzina": {
        "f": "benzina",
        "c": 5.2
      },
      "1.2 benzina": {
        "f": "benzina",
        "c": 5.6
      },
      "1.4 benzina": {
        "f": "benzina",
        "c": 6.0
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.6
      },
      "1.5 dCi / TDI / diesel": {
        "f": "motorina",
        "c": 4.4
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.7
      },
      "GPL / ECO-G": {
        "f": "gpl",
        "c": 7.2
      }
    },
    "Panda": {
      "1.0 benzina": {
        "f": "benzina",
        "c": 5.2
      },
      "1.2 benzina": {
        "f": "benzina",
        "c": 5.6
      },
      "1.4 benzina": {
        "f": "benzina",
        "c": 6.0
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.6
      },
      "1.5 dCi / TDI / diesel": {
        "f": "motorina",
        "c": 4.4
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.7
      },
      "GPL / ECO-G": {
        "f": "gpl",
        "c": 7.2
      }
    },
    "Punto": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Grande Punto": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Tipo": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Bravo": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Stilo": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Doblo": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Linea": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Freemont": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    }
  },
  "Ford": {
    "Ka": {
      "1.0 benzina": {
        "f": "benzina",
        "c": 5.2
      },
      "1.2 benzina": {
        "f": "benzina",
        "c": 5.6
      },
      "1.4 benzina": {
        "f": "benzina",
        "c": 6.0
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.6
      },
      "1.5 dCi / TDI / diesel": {
        "f": "motorina",
        "c": 4.4
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.7
      },
      "GPL / ECO-G": {
        "f": "gpl",
        "c": 7.2
      }
    },
    "Fiesta": {
      "1.0 benzina": {
        "f": "benzina",
        "c": 5.2
      },
      "1.2 benzina": {
        "f": "benzina",
        "c": 5.6
      },
      "1.4 benzina": {
        "f": "benzina",
        "c": 6.0
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.6
      },
      "1.5 dCi / TDI / diesel": {
        "f": "motorina",
        "c": 4.4
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.7
      },
      "GPL / ECO-G": {
        "f": "gpl",
        "c": 7.2
      }
    },
    "Focus": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Mondeo": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Fusion": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "B-Max": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "C-Max": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "S-Max": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Galaxy": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Puma": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.2
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 6.5
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.0
      }
    },
    "Kuga": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.2
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 6.5
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.0
      }
    },
    "EcoSport": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Edge": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Transit Connect": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    }
  },
  "Honda": {
    "Jazz": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Civic": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Accord": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "CR-V": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.2
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 6.5
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.0
      }
    },
    "HR-V": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.2
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 6.5
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.0
      }
    },
    "FR-V": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Insight": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    }
  },
  "Hyundai": {
    "i10": {
      "1.0 benzina": {
        "f": "benzina",
        "c": 5.2
      },
      "1.2 benzina": {
        "f": "benzina",
        "c": 5.6
      },
      "1.4 benzina": {
        "f": "benzina",
        "c": 6.0
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.6
      },
      "1.5 dCi / TDI / diesel": {
        "f": "motorina",
        "c": 4.4
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.7
      },
      "GPL / ECO-G": {
        "f": "gpl",
        "c": 7.2
      }
    },
    "i20": {
      "1.0 benzina": {
        "f": "benzina",
        "c": 5.2
      },
      "1.2 benzina": {
        "f": "benzina",
        "c": 5.6
      },
      "1.4 benzina": {
        "f": "benzina",
        "c": 6.0
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.6
      },
      "1.5 dCi / TDI / diesel": {
        "f": "motorina",
        "c": 4.4
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.7
      },
      "GPL / ECO-G": {
        "f": "gpl",
        "c": 7.2
      }
    },
    "i30": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "i40": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Elantra": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Accent": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Tucson": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.2
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 6.5
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.0
      }
    },
    "Santa Fe": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.2
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 6.5
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.0
      }
    },
    "Kona": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "ix35": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Bayon": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    }
  },
  "Infiniti": {
    "Q30": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "Q50": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "Q60": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "Q70": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "EX": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "FX": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "QX30": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "QX50": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "QX70": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    }
  },
  "Jaguar": {
    "XE": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "XF": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "XJ": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "F-Pace": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "E-Pace": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "F-Type": {
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    }
  },
  "Jeep": {
    "Renegade": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.2
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 6.5
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.0
      }
    },
    "Compass": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.2
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 6.5
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.0
      }
    },
    "Cherokee": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.2
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 6.5
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.0
      }
    },
    "Grand Cherokee": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.2
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 6.5
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.0
      }
    },
    "Wrangler": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Avenger": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    }
  },
  "Kia": {
    "Picanto": {
      "1.0 benzina": {
        "f": "benzina",
        "c": 5.2
      },
      "1.2 benzina": {
        "f": "benzina",
        "c": 5.6
      },
      "1.4 benzina": {
        "f": "benzina",
        "c": 6.0
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.6
      },
      "1.5 dCi / TDI / diesel": {
        "f": "motorina",
        "c": 4.4
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.7
      },
      "GPL / ECO-G": {
        "f": "gpl",
        "c": 7.2
      }
    },
    "Rio": {
      "1.0 benzina": {
        "f": "benzina",
        "c": 5.2
      },
      "1.2 benzina": {
        "f": "benzina",
        "c": 5.6
      },
      "1.4 benzina": {
        "f": "benzina",
        "c": 6.0
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.6
      },
      "1.5 dCi / TDI / diesel": {
        "f": "motorina",
        "c": 4.4
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.7
      },
      "GPL / ECO-G": {
        "f": "gpl",
        "c": 7.2
      }
    },
    "Ceed": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "ProCeed": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Optima": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Stonic": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Sportage": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.2
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 6.5
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.0
      }
    },
    "Sorento": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.2
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 6.5
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.0
      }
    },
    "Soul": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Carens": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "XCeed": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    }
  },
  "Lancia": {
    "Ypsilon": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Delta": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Musa": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Thesis": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Voyager": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    }
  },
  "Land Rover": {
    "Freelander": {
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "Discovery Sport": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "Discovery": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "Range Rover Evoque": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "Range Rover Sport": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "Range Rover": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "Defender": {
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    }
  },
  "Lexus": {
    "CT": {
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "IS": {
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "ES": {
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "GS": {
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "LS": {
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "NX": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "RX": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "UX": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    }
  },
  "Mazda": {
    "Mazda2": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Mazda3": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Mazda5": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Mazda6": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "CX-3": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.2
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 6.5
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.0
      }
    },
    "CX-5": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.2
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 6.5
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.0
      }
    },
    "CX-7": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.2
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 6.5
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.0
      }
    },
    "CX-30": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.2
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 6.5
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.0
      }
    },
    "MX-5": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    }
  },
  "Mercedes-Benz": {
    "A-Class": {
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "B-Class": {
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "C-Class": {
      "C180": {
        "f": "benzina",
        "c": 6.6
      },
      "C200": {
        "f": "benzina",
        "c": 6.9
      },
      "C220 CDI / C220d": {
        "f": "motorina",
        "c": 5.1
      },
      "C250d": {
        "f": "motorina",
        "c": 5.5
      }
    },
    "E-Class": {
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "S-Class": {
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "CLA": {
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "CLS": {
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "GLA": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "GLB": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "GLC": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "GLE": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "GLS": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "Vito": {
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "Sprinter": {
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    }
  },
  "Mini": {
    "One": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Cooper": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Clubman": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Countryman": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Paceman": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    }
  },
  "Mitsubishi": {
    "Colt": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Lancer": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "ASX": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.2
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 6.5
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.0
      }
    },
    "Outlander": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.2
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 6.5
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.0
      }
    },
    "Pajero": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Eclipse Cross": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Space Star": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    }
  },
  "Nissan": {
    "Micra": {
      "1.0 benzina": {
        "f": "benzina",
        "c": 5.2
      },
      "1.2 benzina": {
        "f": "benzina",
        "c": 5.6
      },
      "1.4 benzina": {
        "f": "benzina",
        "c": 6.0
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.6
      },
      "1.5 dCi / TDI / diesel": {
        "f": "motorina",
        "c": 4.4
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.7
      },
      "GPL / ECO-G": {
        "f": "gpl",
        "c": 7.2
      }
    },
    "Note": {
      "1.0 benzina": {
        "f": "benzina",
        "c": 5.2
      },
      "1.2 benzina": {
        "f": "benzina",
        "c": 5.6
      },
      "1.4 benzina": {
        "f": "benzina",
        "c": 6.0
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.6
      },
      "1.5 dCi / TDI / diesel": {
        "f": "motorina",
        "c": 4.4
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.7
      },
      "GPL / ECO-G": {
        "f": "gpl",
        "c": 7.2
      }
    },
    "Almera": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Primera": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Juke": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.2
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 6.5
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.0
      }
    },
    "Qashqai": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.2
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 6.5
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.0
      }
    },
    "X-Trail": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.2
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 6.5
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.0
      }
    },
    "Navara": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Murano": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Pulsar": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    }
  },
  "Opel": {
    "Adam": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Agila": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Corsa": {
      "1.0 benzina": {
        "f": "benzina",
        "c": 5.2
      },
      "1.2 benzina": {
        "f": "benzina",
        "c": 5.6
      },
      "1.4 benzina": {
        "f": "benzina",
        "c": 6.0
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.6
      },
      "1.5 dCi / TDI / diesel": {
        "f": "motorina",
        "c": 4.4
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.7
      },
      "GPL / ECO-G": {
        "f": "gpl",
        "c": 7.2
      }
    },
    "Astra": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Vectra": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Insignia": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Meriva": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Zafira": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Mokka": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.2
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 6.5
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.0
      }
    },
    "Crossland": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.2
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 6.5
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.0
      }
    },
    "Grandland": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.2
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 6.5
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.0
      }
    },
    "Combo": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    }
  },
  "Peugeot": {
    "107": {
      "1.0 benzina": {
        "f": "benzina",
        "c": 5.2
      },
      "1.2 benzina": {
        "f": "benzina",
        "c": 5.6
      },
      "1.4 benzina": {
        "f": "benzina",
        "c": 6.0
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.6
      },
      "1.5 dCi / TDI / diesel": {
        "f": "motorina",
        "c": 4.4
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.7
      },
      "GPL / ECO-G": {
        "f": "gpl",
        "c": 7.2
      }
    },
    "108": {
      "1.0 benzina": {
        "f": "benzina",
        "c": 5.2
      },
      "1.2 benzina": {
        "f": "benzina",
        "c": 5.6
      },
      "1.4 benzina": {
        "f": "benzina",
        "c": 6.0
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.6
      },
      "1.5 dCi / TDI / diesel": {
        "f": "motorina",
        "c": 4.4
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.7
      },
      "GPL / ECO-G": {
        "f": "gpl",
        "c": 7.2
      }
    },
    "206": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "207": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "208": {
      "1.0 benzina": {
        "f": "benzina",
        "c": 5.2
      },
      "1.2 benzina": {
        "f": "benzina",
        "c": 5.6
      },
      "1.4 benzina": {
        "f": "benzina",
        "c": 6.0
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.6
      },
      "1.5 dCi / TDI / diesel": {
        "f": "motorina",
        "c": 4.4
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.7
      },
      "GPL / ECO-G": {
        "f": "gpl",
        "c": 7.2
      }
    },
    "307": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "308": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "407": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "508": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "2008": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "3008": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.2
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 6.5
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.0
      }
    },
    "5008": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.2
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 6.5
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.0
      }
    },
    "Partner": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Rifter": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    }
  },
  "Porsche": {
    "Boxster": {
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 10.5
      },
      "4.0+ benzina performanta": {
        "f": "benzina",
        "c": 13.5
      }
    },
    "Cayman": {
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 10.5
      },
      "4.0+ benzina performanta": {
        "f": "benzina",
        "c": 13.5
      }
    },
    "911": {
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 10.5
      },
      "4.0+ benzina performanta": {
        "f": "benzina",
        "c": 13.5
      }
    },
    "Panamera": {
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 10.5
      },
      "4.0+ benzina performanta": {
        "f": "benzina",
        "c": 13.5
      }
    },
    "Macan": {
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 10.5
      },
      "4.0+ benzina performanta": {
        "f": "benzina",
        "c": 13.5
      }
    },
    "Cayenne": {
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 10.5
      },
      "4.0+ benzina performanta": {
        "f": "benzina",
        "c": 13.5
      }
    }
  },
  "Renault": {
    "Twingo": {
      "1.0 benzina": {
        "f": "benzina",
        "c": 5.2
      },
      "1.2 benzina": {
        "f": "benzina",
        "c": 5.6
      },
      "1.4 benzina": {
        "f": "benzina",
        "c": 6.0
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.6
      },
      "1.5 dCi / TDI / diesel": {
        "f": "motorina",
        "c": 4.4
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.7
      },
      "GPL / ECO-G": {
        "f": "gpl",
        "c": 7.2
      }
    },
    "Clio": {
      "1.0 benzina": {
        "f": "benzina",
        "c": 5.2
      },
      "1.2 benzina": {
        "f": "benzina",
        "c": 5.6
      },
      "1.4 benzina": {
        "f": "benzina",
        "c": 6.0
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.6
      },
      "1.5 dCi / TDI / diesel": {
        "f": "motorina",
        "c": 4.4
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.7
      },
      "GPL / ECO-G": {
        "f": "gpl",
        "c": 7.2
      }
    },
    "Megane": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Laguna": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Talisman": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Captur": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.2
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 6.5
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.0
      }
    },
    "Kadjar": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.2
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 6.5
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.0
      }
    },
    "Koleos": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.2
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 6.5
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.0
      }
    },
    "Scenic": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Espace": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Kangoo": {
      "1.0 benzina": {
        "f": "benzina",
        "c": 5.2
      },
      "1.2 benzina": {
        "f": "benzina",
        "c": 5.6
      },
      "1.4 benzina": {
        "f": "benzina",
        "c": 6.0
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.6
      },
      "1.5 dCi / TDI / diesel": {
        "f": "motorina",
        "c": 4.4
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.7
      },
      "GPL / ECO-G": {
        "f": "gpl",
        "c": 7.2
      }
    }
  },
  "Rover": {
    "25": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "45": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "75": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    }
  },
  "Saab": {
    "9-3": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "9-5": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    }
  },
  "Seat": {
    "Mii": {
      "1.0 benzina": {
        "f": "benzina",
        "c": 5.2
      },
      "1.2 benzina": {
        "f": "benzina",
        "c": 5.6
      },
      "1.4 benzina": {
        "f": "benzina",
        "c": 6.0
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.6
      },
      "1.5 dCi / TDI / diesel": {
        "f": "motorina",
        "c": 4.4
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.7
      },
      "GPL / ECO-G": {
        "f": "gpl",
        "c": 7.2
      }
    },
    "Ibiza": {
      "1.0 benzina": {
        "f": "benzina",
        "c": 5.2
      },
      "1.2 benzina": {
        "f": "benzina",
        "c": 5.6
      },
      "1.4 benzina": {
        "f": "benzina",
        "c": 6.0
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.6
      },
      "1.5 dCi / TDI / diesel": {
        "f": "motorina",
        "c": 4.4
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.7
      },
      "GPL / ECO-G": {
        "f": "gpl",
        "c": 7.2
      }
    },
    "Leon": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Toledo": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Altea": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Ateca": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.2
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 6.5
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.0
      }
    },
    "Arona": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.2
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 6.5
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.0
      }
    },
    "Tarraco": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.2
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 6.5
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.0
      }
    }
  },
  "Skoda": {
    "Citigo": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Fabia": {
      "1.0 benzina": {
        "f": "benzina",
        "c": 5.2
      },
      "1.2 benzina": {
        "f": "benzina",
        "c": 5.6
      },
      "1.4 benzina": {
        "f": "benzina",
        "c": 6.0
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.6
      },
      "1.5 dCi / TDI / diesel": {
        "f": "motorina",
        "c": 4.4
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.7
      },
      "GPL / ECO-G": {
        "f": "gpl",
        "c": 7.2
      }
    },
    "Rapid": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Scala": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Octavia": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Superb": {
      "1.0 benzina": {
        "f": "benzina",
        "c": 5.2
      },
      "1.2 benzina": {
        "f": "benzina",
        "c": 5.6
      },
      "1.4 benzina": {
        "f": "benzina",
        "c": 6.0
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.6
      },
      "1.5 dCi / TDI / diesel": {
        "f": "motorina",
        "c": 4.4
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.7
      },
      "GPL / ECO-G": {
        "f": "gpl",
        "c": 7.2
      }
    },
    "Kamiq": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.2
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 6.5
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.0
      }
    },
    "Karoq": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.2
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 6.5
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.0
      }
    },
    "Kodiaq": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.2
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 6.5
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.0
      }
    },
    "Yeti": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    }
  },
  "Smart": {
    "Fortwo": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Forfour": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    }
  },
  "Subaru": {
    "Impreza": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Legacy": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Forester": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Outback": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "XV": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "BRZ": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    }
  },
  "Suzuki": {
    "Alto": {
      "1.0 benzina": {
        "f": "benzina",
        "c": 5.2
      },
      "1.2 benzina": {
        "f": "benzina",
        "c": 5.6
      },
      "1.4 benzina": {
        "f": "benzina",
        "c": 6.0
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.6
      },
      "1.5 dCi / TDI / diesel": {
        "f": "motorina",
        "c": 4.4
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.7
      },
      "GPL / ECO-G": {
        "f": "gpl",
        "c": 7.2
      }
    },
    "Swift": {
      "1.0 benzina": {
        "f": "benzina",
        "c": 5.2
      },
      "1.2 benzina": {
        "f": "benzina",
        "c": 5.6
      },
      "1.4 benzina": {
        "f": "benzina",
        "c": 6.0
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.6
      },
      "1.5 dCi / TDI / diesel": {
        "f": "motorina",
        "c": 4.4
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.7
      },
      "GPL / ECO-G": {
        "f": "gpl",
        "c": 7.2
      }
    },
    "Baleno": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "SX4": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.2
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 6.5
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.0
      }
    },
    "S-Cross": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Vitara": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.2
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 6.5
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.0
      }
    },
    "Grand Vitara": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.2
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 6.5
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.0
      }
    },
    "Jimny": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Ignis": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    }
  },
  "Toyota": {
    "Aygo": {
      "1.0 benzina": {
        "f": "benzina",
        "c": 5.2
      },
      "1.2 benzina": {
        "f": "benzina",
        "c": 5.6
      },
      "1.4 benzina": {
        "f": "benzina",
        "c": 6.0
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.6
      },
      "1.5 dCi / TDI / diesel": {
        "f": "motorina",
        "c": 4.4
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.7
      },
      "GPL / ECO-G": {
        "f": "gpl",
        "c": 7.2
      }
    },
    "Yaris": {
      "1.0 benzina": {
        "f": "benzina",
        "c": 5.2
      },
      "1.2 benzina": {
        "f": "benzina",
        "c": 5.6
      },
      "1.4 benzina": {
        "f": "benzina",
        "c": 6.0
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.6
      },
      "1.5 dCi / TDI / diesel": {
        "f": "motorina",
        "c": 4.4
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.7
      },
      "GPL / ECO-G": {
        "f": "gpl",
        "c": 7.2
      }
    },
    "Corolla": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Auris": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Avensis": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Camry": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "C-HR": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "RAV4": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.2
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 6.5
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.0
      }
    },
    "Prius": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Verso": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Land Cruiser": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Hilux": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    }
  },
  "Volkswagen": {
    "Up": {
      "1.0 benzina": {
        "f": "benzina",
        "c": 5.2
      },
      "1.2 benzina": {
        "f": "benzina",
        "c": 5.6
      },
      "1.4 benzina": {
        "f": "benzina",
        "c": 6.0
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.6
      },
      "1.5 dCi / TDI / diesel": {
        "f": "motorina",
        "c": 4.4
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.7
      },
      "GPL / ECO-G": {
        "f": "gpl",
        "c": 7.2
      }
    },
    "Polo": {
      "1.0 benzina": {
        "f": "benzina",
        "c": 5.2
      },
      "1.2 benzina": {
        "f": "benzina",
        "c": 5.6
      },
      "1.4 benzina": {
        "f": "benzina",
        "c": 6.0
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.6
      },
      "1.5 dCi / TDI / diesel": {
        "f": "motorina",
        "c": 4.4
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.7
      },
      "GPL / ECO-G": {
        "f": "gpl",
        "c": 7.2
      }
    },
    "Golf": {
      "1.0 TSI": {
        "f": "benzina",
        "c": 5.2
      },
      "1.2 TSI": {
        "f": "benzina",
        "c": 5.5
      },
      "1.4 TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.5 TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.6 TDI": {
        "f": "motorina",
        "c": 4.5
      },
      "2.0 TDI": {
        "f": "motorina",
        "c": 5.0
      },
      "2.0 TSI GTI": {
        "f": "benzina",
        "c": 7.4
      }
    },
    "Jetta": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Bora": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Passat": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Arteon": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Scirocco": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Touran": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Sharan": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "T-Cross": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.2
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 6.5
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.0
      }
    },
    "T-Roc": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.2
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 6.5
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.0
      }
    },
    "Tiguan": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.2
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 6.5
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.0
      }
    },
    "Touareg": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.2
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 6.5
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.0
      }
    },
    "Caddy": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "Transporter": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    }
  },
  "Volvo": {
    "C30": {
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "S40": {
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "S60": {
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "S80": {
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "S90": {
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "V40": {
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "V50": {
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "V60": {
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "V70": {
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "V90": {
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "XC40": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "XC60": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "XC70": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "XC90": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    }
  },
  "Maserati": {
    "Ghibli": {
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 10.5
      },
      "4.0+ benzina performanta": {
        "f": "benzina",
        "c": 13.5
      }
    },
    "Quattroporte": {
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 10.5
      },
      "4.0+ benzina performanta": {
        "f": "benzina",
        "c": 13.5
      }
    },
    "Levante": {
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 10.5
      },
      "4.0+ benzina performanta": {
        "f": "benzina",
        "c": 13.5
      }
    }
  },
  "Bentley": {
    "Continental GT": {
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 10.5
      },
      "4.0+ benzina performanta": {
        "f": "benzina",
        "c": 13.5
      }
    },
    "Flying Spur": {
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 10.5
      },
      "4.0+ benzina performanta": {
        "f": "benzina",
        "c": 13.5
      }
    },
    "Bentayga": {
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 10.5
      },
      "4.0+ benzina performanta": {
        "f": "benzina",
        "c": 13.5
      }
    }
  },
  "Ferrari": {
    "California": {
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 10.5
      },
      "4.0+ benzina performanta": {
        "f": "benzina",
        "c": 13.5
      }
    },
    "Roma": {
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 10.5
      },
      "4.0+ benzina performanta": {
        "f": "benzina",
        "c": 13.5
      }
    },
    "Portofino": {
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 10.5
      },
      "4.0+ benzina performanta": {
        "f": "benzina",
        "c": 13.5
      }
    },
    "F8": {
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 10.5
      },
      "4.0+ benzina performanta": {
        "f": "benzina",
        "c": 13.5
      }
    },
    "488": {
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 10.5
      },
      "4.0+ benzina performanta": {
        "f": "benzina",
        "c": 13.5
      }
    },
    "458": {
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 10.5
      },
      "4.0+ benzina performanta": {
        "f": "benzina",
        "c": 13.5
      }
    }
  },
  "Lamborghini": {
    "Gallardo": {
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 10.5
      },
      "4.0+ benzina performanta": {
        "f": "benzina",
        "c": 13.5
      }
    },
    "Huracan": {
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 10.5
      },
      "4.0+ benzina performanta": {
        "f": "benzina",
        "c": 13.5
      }
    },
    "Aventador": {
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 10.5
      },
      "4.0+ benzina performanta": {
        "f": "benzina",
        "c": 13.5
      }
    },
    "Urus": {
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 10.5
      },
      "4.0+ benzina performanta": {
        "f": "benzina",
        "c": 13.5
      }
    }
  },
  "Mclaren": {
    "540C": {
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 10.5
      },
      "4.0+ benzina performanta": {
        "f": "benzina",
        "c": 13.5
      }
    },
    "570S": {
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 10.5
      },
      "4.0+ benzina performanta": {
        "f": "benzina",
        "c": 13.5
      }
    },
    "600LT": {
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 10.5
      },
      "4.0+ benzina performanta": {
        "f": "benzina",
        "c": 13.5
      }
    },
    "720S": {
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 10.5
      },
      "4.0+ benzina performanta": {
        "f": "benzina",
        "c": 13.5
      }
    },
    "Artura": {
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 10.5
      },
      "4.0+ benzina performanta": {
        "f": "benzina",
        "c": 13.5
      }
    }
  },
  "Rolls-Royce": {
    "Ghost": {
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 10.5
      },
      "4.0+ benzina performanta": {
        "f": "benzina",
        "c": 13.5
      }
    },
    "Phantom": {
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 10.5
      },
      "4.0+ benzina performanta": {
        "f": "benzina",
        "c": 13.5
      }
    },
    "Wraith": {
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 10.5
      },
      "4.0+ benzina performanta": {
        "f": "benzina",
        "c": 13.5
      }
    },
    "Dawn": {
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 10.5
      },
      "4.0+ benzina performanta": {
        "f": "benzina",
        "c": 13.5
      }
    },
    "Cullinan": {
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 8.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 10.5
      },
      "4.0+ benzina performanta": {
        "f": "benzina",
        "c": 13.5
      }
    }
  },
  "MG": {
    "MG3": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "MG ZS": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "MG HS": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    },
    "MG5": {
      "1.2 TCe / PureTech / TSI": {
        "f": "benzina",
        "c": 5.8
      },
      "1.4 TSI / T-Jet / Turbo": {
        "f": "benzina",
        "c": 6.4
      },
      "1.5 TSI / EcoBoost": {
        "f": "benzina",
        "c": 6.5
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 6.8
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 4.9
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.5
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 5.2
      }
    }
  },
  "Genesis": {
    "G70": {
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "G80": {
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "GV70": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    },
    "GV80": {
      "1.3 / 1.4 turbo benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.5 benzina / hybrid": {
        "f": "benzina",
        "c": 6.4
      },
      "1.6 benzina": {
        "f": "benzina",
        "c": 7.0
      },
      "1.6 diesel": {
        "f": "motorina",
        "c": 5.6
      },
      "2.0 diesel": {
        "f": "motorina",
        "c": 5.8
      },
      "2.0 benzina turbo": {
        "f": "benzina",
        "c": 7.8
      },
      "3.0 benzina": {
        "f": "benzina",
        "c": 9.0
      },
      "3.0 diesel": {
        "f": "motorina",
        "c": 6.8
      },
      "Hybrid benzina": {
        "f": "benzina",
        "c": 6.0
      }
    }
  }
};

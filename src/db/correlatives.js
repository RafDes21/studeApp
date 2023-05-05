export const CORRELATIVES = [
    {
        id:1,
        subjects:["Matemáticas", "Química", "ICSE"],
        correlatives:[
            {
                study:[],
                yield:[]
            },
            {
                study:[],
                yield:[]
            },
            {
                study:[],
                yield:[]
            }
        ]
    },
    {
        id:2,
        subjects:["Biofísica", "Biología ( 54 )", "IPC"],
        correlatives:[
            {
                study:["Final Matemática","Final Química"],
                yield:[]
            },
            {
                study:["Final Matemática"], 
                yield:[]
            },
            {
                study:[],
                yield:[]
            }
        ]
    },
    {
        id:3,
        subjects:["Química General e Inorgánica", "Matemática", "Anatomía e Histología"],
        correlatives:[
            {
                study:["CBC Aprobado"],
                yield:[]
            },
            {
                study:["CBC Aprobado"],
                yield:[]
            },
            {
                study:["CBC Aprobado"],
                yield:[]
            }
        ]
    },
    {
        id:4,
        subjects:["Física", "Química Orgánica I", "Biología Celular y Molecular"],
        correlatives:[
            {
                study:["TP Matemática"],
                yield:["Final Matemática"]
            },
            {
                study:["TP Qca. General e Inorg."], 
                yield:["Final Qca. General e Inorg."]
            },
            {
                study:["TP Anatomía e Histología"], 
                yield:["Final Anatomía e Histología"]
            }
        ]
    },
    {
        id:5,
        subjects:["Química Orgánica II", "Química Analítica", "Fisiología"],
        correlatives:[
            {
                study:["TP Química Orgánica I","TP física"],
                yield:["Final Química Orgánica I"]
            },
            {
                study:["Final Qca. General e Inorg."], 
                yield:[]
            },
            {
                study:["Final Anatomía e Histología", "TP Biología Celular y Molec."], 
                yield:["Final Biología Celular y Molec."]
            }
        ]
    },
    {
        id:6,
        subjects:["Química Biologica", "Fisicoquímica", "Química Analítica Instrumental"],
        correlatives:[
            {
                study:["TP Química Orgánica II"],
                yield:["Final Química Orgánica II"]
            },
            {
                study:["Final Qca. General e Inorg.", "TP Física"], 
                yield:["Final Física"]
            },
            {
                study:["Final Física", "TP Química Analítica"], 
                yield:["Final Química Analítica"]  
            }
        ]
    },
    {
        id:7,
        subjects:["Fisiopatología", "Microbiología", "Química Biológica Superior", "Genética Molecular", "Genética Diagnóstica y Forense"],
        correlatives:[
            {
                study:["TP Fisiología"],
                yield:["Final Fisiología"]
            },
            {
                study:["TP Biología Celular y Molec.", "TP Química Biológica"], 
                yield:["Final Biología Celular y Molec."]
            },
            {
                study:["TP Qca. Analítica Instr", "TP Química Biológica"], 
                yield:["Final Química Biológica"]  
            },
            {
                study:["Final Biología Celular y Molec.", "TP Química Biológica"], 
                yield:[]
            },
            {
                study:["TP Genética Molecular"], 
                yield:[]  
            }
        ]
    },
    {
        id:8,
        subjects:["Inmunología", "Farmacología", "Virología", "Biotecnología"],
        correlatives:[
            {
                study:["TP Fisiología", "TP Microbiología"],
                yield:["Final Fisiología", "Final Química Biológica"]
            },
            {
                study:["TP Fisiología", "TP Química Biológica"], 
                yield:["Final Fisiología", "Final Química Biológica"]
            },
            {
                study:["TP Biología Celular y Molec.", "TP Microbiología"], 
                yield:["Final Biología Celular y Molec."]  
            },
            {
                study:["TP Genética Molecular", "TP Microbiología"], 
                yield:[]
            }
        ]
    },
    {
        id:9,
        subjects:["Microbiología Clínica", "Bioquímica Clíinica I"],
        correlatives:[
            {
                study:["TP Fisiología", "TP Virología", "TP Inmunología"], 
                yield:["Final Fisiología", "Final Microbiología"]  
            },
            {
                study:["TP Fisiología", "TP Qca. Biológica Superior", "TP Inmunología", "Final Química Biológica"], 
                yield:["Final Fisiopatología"]
            }
        ]
    },
    {
        id:10,
        subjects:["Toxicología y Química legal", "Nutrición y Bromatología", "Bioquímica Clínica II"],
        correlatives:[
            {
                study:["Final Química Biológica", "TP Farmacológia"], 
                yield:["Final Farmacológia"]
            },
            {
                study:["Final Química Biológica", "Final Fisiología"], 
                yield:[]  
            },
            {
                study:["TP Bioquímica Clínica I", "TP Microbiología Clínica", "Final Fisiopatología"], 
                yield:["Final Q. Biológica Superior"]
            }
        ]
    },
    {
        id:11,
        subjects:["Práctica Profesional Externa", "Orientación"],
        correlatives:[
            {
                study:[],
                yield:[]
            },
            {
                study:[],
                yield:[]
            }
        ]
    }
]
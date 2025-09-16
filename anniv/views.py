from django.shortcuts import render

# Create your views here.
def index(request):
    liste = [
        "Keren Siki","Sam Matia","Victoria Basemenane",
        "Christian Imani","Epaphras Makenene","Perside Lusakueno",
        "Melanie Masengu","Jr M'buyamba","Ir Pascal Bunyori","Vainqueur Musangu",
        "Deodat Muhiya","Mounier Bena","Bellevie Katota","Mervedie Tsimba","Eliane Sibi",
        "Fideline Balibuno","Dr Luciane Sibi","Clareine Mulekera","Didier Ambunga","Cathia Abongi",
        "Lucie Kandolo","Jonathan Kanga","Bowa Mervedie","Cpa Redel","Jimmy Rais","Jed Milinganyo",
        "Emmanuel Kasongo","Junior Malu","Manasseh","Cp Abel","Dr Freud","Adjany ","Percide Bombale",
        "Gloire Ashuza","Andy Binaki","Grace Ndungi","Joed Matumba","Zouzou","Sharon","Hermes nzuzi",""
        "Don'El ekaka","Jacques Kipulu","Heritage Kimuana"
        ]
    context = {
        'names': liste,
    }
    return render(request, "index.html", context)

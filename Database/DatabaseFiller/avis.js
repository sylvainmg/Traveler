import fs from "fs";

const obj = JSON.parse(fs.readFileSync("outputs/booking.json", "utf-8"));

const avisHotel1 = {
    five: "Hôtel impeccable, service irréprochable et cadre agréable.",
    four: "Séjour agréable, petit-déjeuner perfectible.",
    three: "Chambre correcte mais un peu petite.",
    two: "Bruit la nuit, service lent.",
    one: "Chambre sale, expérience très décevante.",
};
const avisHotel2 = {
    five: "Personnel aux petits soins, propreté parfaite.",
    four: "Bonne adresse, literie confortable.",
    three: "Acceptable, emplacement pratique.",
    two: "Accueil froid, prestations moyennes.",
    one: "Service inexistant, ne recommande pas.",
};
const avisHotel3 = {
    five: "Vue magnifique, chambre spacieuse et propre.",
    four: "Très bon rapport qualité/prix.",
    three: "Correct mais wifi instable.",
    two: "Propreté à revoir.",
    one: "Salle de bain insalubre, à fuir.",
};
const avisHotel4 = {
    five: "Emplacement idéal, équipe très réactive.",
    four: "Bon séjour, quelques petits défauts.",
    three: "Hôtel moyen, rien d'exceptionnel.",
    two: "Confort insuffisant pour le prix.",
    one: "Bruyant et mal entretenu.",
};
const avisHotel5 = {
    five: "Service de qualité, petit-déjeuner excellent.",
    four: "Chambre propre et calme.",
    three: "Séjour convenable, personnel correct.",
    two: "Equipements vieillissants.",
    one: "Problèmes d'hygiène, très mauvais.",
};
const avisHotel6 = {
    five: "Expérience parfaite, je reviendrai.",
    four: "Très bon séjour, recommande.",
    three: "Bien mais le personnel pourrait être plus accueillant.",
    two: "Plutôt déçu par le ménage.",
    one: "Hôtel hors service, très mauvaise expérience.",
};
const avisHotel7 = {
    five: "Luxueux, service irréprochable et attentionné.",
    four: "Excellent standing, petit bémol sur la carte.",
    three: "Correct pour un passage court.",
    two: "Chambres bruyantes, mauvaise isolation.",
    one: "Propreté déplorable et bruit constant.",
};
const avisHotel8 = {
    five: "Séjour relaxant, spa et services top.",
    four: "Très bon hôtel, digne d'un 4 étoiles.",
    three: "Moyen, prestations limitées.",
    two: "Accueil moyen et équipement dépassé.",
    one: "Expérience catastrophique, évitez.",
};
const avisHotel9 = {
    five: "Parfait pour les vacances, tout est pensé.",
    four: "Globalement satisfait, légère déception sur le room service.",
    three: "Hotel correct, prix un peu élevé.",
    two: "Problèmes de réservation non résolus.",
    one: "Personnel impoli et propreté absente.",
};
const avisHotel10 = {
    five: "Ambiance chaleureuse, excellent petit-déjeuner.",
    four: "Bon établissement, service efficace.",
    three: "Conforme aux attentes, rien d'exceptionnel.",
    two: "Chambre vieillotte, mauvaise odeur.",
    one: "Mauvaise gestion, chambre inadmissible.",
};
const avisHotel11 = {
    five: "Chambre parfaite, literie de qualité, rien à redire.",
    four: "Bon rapport qualité/prix, recommande.",
    three: "Séjour convenable, emplacement pratique.",
    two: "Équipements défaillants.",
    one: "Expérience très négative, service inexistant.",
};
const avisHotel12 = {
    five: "Service haut de gamme, prestation excellente.",
    four: "Très bon hôtel, personnel agréable.",
    three: "OK pour une nuit, pas plus.",
    two: "Bruyant et peu propre.",
    one: "Hôtel sale, à dénoncer.",
};
const avisHotel13 = {
    five: "Personnel professionnel et disponible 24/7.",
    four: "Chambre confortable, bon emplacement.",
    three: "Rien de spécial, standard.",
    two: "Peu de services proposés.",
    one: "Horrible, je ne reviendrai jamais.",
};
const avisHotel14 = {
    five: "Accueil remarquable, beaucoup de petites attentions.",
    four: "Très bien, petites améliorations à prévoir.",
    three: "Correct, mais peu d'ambiance.",
    two: "Propreté médiocre.",
    one: "Conditions inacceptables, à éviter.",
};
const avisHotel15 = {
    five: "Hôtel charmant, déco soignée et personnel souriant.",
    four: "Bon séjour, chambre propre.",
    three: "Moyen, petit-déjeuner basique.",
    two: "Service insuffisant pour le tarif.",
    one: "Très mauvaise expérience globale.",
};
const avisHotel16 = {
    five: "Cadre idyllique, service 5 étoiles.",
    four: "Très satisfait, mais service lent au dîner.",
    three: "Conforme à la description.",
    two: "Pas à la hauteur des photos.",
    one: "Salle de bain cassée, inacceptable.",
};
const avisHotel17 = {
    five: "Parfait pour un week-end, calme et cosy.",
    four: "Bon hôtel, literie correcte.",
    three: "Rien d'extraordinaire.",
    two: "Mauvais rapport qualité/prix.",
    one: "Problèmes de sécurité, à fuir.",
};
const avisHotel18 = {
    five: "Service impeccable, chambres très propres.",
    four: "Bon établissement, personnel gentil.",
    three: "Correct mais bruyant la nuit.",
    two: "Petit-déjeuner décevant.",
    one: "Très déçu, conditions inacceptables.",
};
const avisHotel19 = {
    five: "Expérience incroyable, je recommande vivement.",
    four: "Séjour agréable, quelques détails à revoir.",
    three: "Hôtel satisfaisant pour le prix.",
    two: "Problèmes d'entretien récurrents.",
    one: "Immondices dans la chambre, ne pas y aller.",
};
const avisHotel20 = {
    five: "Tout était parfait : propreté, service, emplacement.",
    four: "Bon séjour avec de petites améliorations possibles.",
    three: "Satisfaisant, rien de spécial.",
    two: "Service peu réactif.",
    one: "Désastreux, nous sommes partis tôt.",
};
const avisHotel21 = {
    five: "Personnel chaleureux, prestations haut de gamme.",
    four: "Très bon confort, bon emplacement.",
    three: "Moyen, standard.",
    two: "Ménage approximatif.",
    one: "Chambre inadmissible, très sale.",
};
const avisHotel22 = {
    five: "Hôtel cosy, petits-déjeuners excellents.",
    four: "Bon rapport qualité/prix global.",
    three: "Correct mais isolé.",
    two: "Problèmes d'eau chaude.",
    one: "Pas d'eau chaude, pas de service.",
};
const avisHotel23 = {
    five: "Séjour relaxant, spa et piscine parfaits.",
    four: "Très bon séjour, quelques améliorations.",
    three: "Hotel acceptable.",
    two: "Chambre usée et sale.",
    one: "Service inexistant, très mauvais.",
};
const avisHotel24 = {
    five: "Confort optimal, très bon emplacement.",
    four: "Beau lieu, mais personnel parfois débordé.",
    three: "Assez correct pour un court séjour.",
    two: "Inconfortable pour nuit prolongée.",
    one: "Mauvaise expérience, pas de remboursement.",
};
const avisHotel25 = {
    five: "Excellente expérience, vais revenir.",
    four: "Séjour agréable, hôtel bien entretenu.",
    three: "Correct, sans plus.",
    two: "Trop cher pour la qualité fournie.",
    one: "Chambres sales, bruit constant.",
};
const avisHotel26 = {
    five: "Service impeccable, chambres haut de gamme.",
    four: "Très agréable, je recommande.",
    three: "Moyen, prestations limitées.",
    two: "Personnel peu professionnel.",
    one: "Expérience honteuse, propreté insuffisante.",
};
const avisHotel27 = {
    five: "Cadre sublime, prestations de grande qualité.",
    four: "Bon standing, quelques détails à améliorer.",
    three: "Satisfaisant pour une étape.",
    two: "Equipements défectueux.",
    one: "Expérience catastrophique, évitez.",
};
const avisHotel28 = {
    five: "Parfait du début à la fin, service exceptionnel.",
    four: "Très bon hôtel, chambre confortable.",
    three: "Acceptable mais peu chaleureux.",
    two: "Propreté douteuse.",
    one: "Hôtel sale et dangereux.",
};
const avisHotel29 = {
    five: "Personnel professionnel et souriant, top.",
    four: "Séjour positif, quelques retards de service.",
    three: "Correct, mais rien d'exceptionnel.",
    two: "Bruit et mauvaises odeurs.",
    one: "Chambre infestée, très mauvais.",
};
const avisHotel30 = {
    five: "Hôtel de rêve, prestations haut de gamme.",
    four: "Très bon établissement, petit bémol sur le spa.",
    three: "Conforme aux attentes.",
    two: "Mauvais service au restaurant.",
    one: "Conditions épouvantables, départ anticipé.",
};
const avisHotel31 = {
    five: "Séjour inoubliable, bravo à l'équipe.",
    four: "Bon séjour, propreté au rendez-vous.",
    three: "Hotel standard, correct.",
    two: "Problèmes de climatisation.",
    one: "Hôtel sale et bruyant.",
};
const avisHotel32 = {
    five: "Chambre luxueuse, service 5 étoiles.",
    four: "Très bien, personnel accueillant.",
    three: "Rien d'exceptionnel mais propre.",
    two: "Insonorisation insuffisante.",
    one: "Dégueulasse, pleine d'insectes.",
};
const avisHotel33 = {
    five: "Parfait pour les familles, nombreuses activités.",
    four: "Bon séjour familial.",
    three: "Correct pour un petit budget.",
    two: "Pas assez de personnel.",
    one: "Séjour gâché par la saleté.",
};
const avisHotel34 = {
    five: "Expérience sublime, excellent rapport qualité.",
    four: "Très bon hôtel, quelques défauts mineurs.",
    three: "Moyen, acceptable.",
    two: "Service médiocre.",
    one: "Très déçu, hôtel horrible.",
};
const avisHotel35 = {
    five: "Tout était parfait, je recommande sans hésiter.",
    four: "Bon standing, service efficace.",
    three: "Correct mais cher.",
    two: "Accueil décevant.",
    one: "Chambre insalubre, plainte déposée.",
};
const avisHotel36 = {
    five: "Séjour incroyable, staff aux petits soins.",
    four: "Très bon séjour, confortable.",
    three: "Hôtel correct, sans plus.",
    two: "Problèmes répétitifs pendant le séjour.",
    one: "Extrêmement décevant, évitez.",
};
const avisHotel37 = {
    five: "Calme, propre et bien situé, parfait.",
    four: "Bon hôtel, service réactif.",
    three: "Correct, basique.",
    two: "Installations vieillissantes.",
    one: "Situation inacceptable, a fuir.",
};
const avisHotel38 = {
    five: "Prestations haut de gamme et personnel attentif.",
    four: "Très bon hôtel pour un séjour détente.",
    three: "Assez correct pour une nuit.",
    two: "Propreté et service à revoir.",
    one: "Très mauvaise expérience, chambre sale.",
};
const avisHotel39 = {
    five: "Séjour royal, tout est parfait.",
    four: "Bon hôtel, quelques améliorations nécessaires.",
    three: "Moyen, standard.",
    two: "Problèmes de réservation non gérés.",
    one: "Hôtel dangereux, propreté zéro.",
};
const avisHotel40 = {
    five: "Service irréprochable, cadre magnifique.",
    four: "Satisfaisant, personnel disponible.",
    three: "Hotel correct pour le prix payé.",
    two: "Trop de bruit et peu de confort.",
    one: "Pire hôtel jamais testé.",
};
const avisHotel41 = {
    five: "Expérience 5 étoiles, très satisfaisant.",
    four: "Bon rapport qualité-prix général.",
    three: "Correct, sans extrême.",
    two: "Chambres mal isolées.",
    one: "Inacceptable, problème majeur.",
};
const avisHotel42 = {
    five: "Accueil chaleureux, prestations de qualité.",
    four: "Très bon séjour, petit-déjeuner copieux.",
    three: "Assez bien pour une halte.",
    two: "Peu de propreté dans les communs.",
    one: "Hôtel sale, fuite d'eau dans la chambre.",
};
const avisHotel43 = {
    five: "Parfait pour se reposer, cadre exceptionnel.",
    four: "Très satisfaite de mon séjour.",
    three: "Moyen mais correct.",
    two: "Problèmes d'hygiène récurrents.",
    one: "Expérience à éviter absolument.",
};
const avisHotel44 = {
    five: "Service top, chambre impeccable et calme.",
    four: "Hôtel agréable, bien situé.",
    three: "Correct pour une nuitée.",
    two: "Peu d'aménagements.",
    one: "Très mauvais, à signaler.",
};
const avisHotel45 = {
    five: "Un sans faute, je reviendrai.",
    four: "Bon séjour, personnel professionnel.",
    three: "Rien à redire de particulier.",
    two: "Personnel peu aimable.",
    one: "Chambre insalubre et sale.",
};
const avisHotel46 = {
    five: "Séjour haut de gamme, prestations excellentes.",
    four: "Très agréable et reposant.",
    three: "Hotel simple mais fonctionnel.",
    two: "Propreté douteuse.",
    one: "Horrible expérience, chambres impraticables.",
};
const avisHotel47 = {
    five: "Tout était parfait, service irréprochable.",
    four: "Bon hôtel, quelques petits défauts.",
    three: "Standard et correct.",
    two: "Mauvaise odeur dans la chambre.",
    one: "Très mauvaise propreté, infestation.",
};
const avisHotel48 = {
    five: "Expérience incroyable, cadre et service top.",
    four: "Séjour agréable, recommande.",
    three: "Correct mais un peu cher.",
    two: "Equipements non fonctionnels.",
    one: "Totalement inacceptable, nous sommes partis.",
};
const avisHotel49 = {
    five: "Hôtel magnifique, prestations parfaites.",
    four: "Très bon séjour malgré un petit retard.",
    three: "Correct, rien d'exceptionnel.",
    two: "Problèmes de maintenance.",
    one: "Chambre ravagée et sale.",
};
const avisHotel50 = {
    five: "Inoubliable, service cinq étoiles.",
    four: "Très bon, confort appréciable.",
    three: "Passable, standard.",
    two: "Mauvaise expérience sur certains points.",
    one: "Hôtel dangereux et sale.",
};

const avisHotelArray = [
    avisHotel1,
    avisHotel2,
    avisHotel3,
    avisHotel4,
    avisHotel5,
    avisHotel6,
    avisHotel7,
    avisHotel8,
    avisHotel9,
    avisHotel10,
    avisHotel11,
    avisHotel12,
    avisHotel13,
    avisHotel14,
    avisHotel15,
    avisHotel16,
    avisHotel17,
    avisHotel18,
    avisHotel19,
    avisHotel20,
    avisHotel21,
    avisHotel22,
    avisHotel23,
    avisHotel24,
    avisHotel25,
    avisHotel26,
    avisHotel27,
    avisHotel28,
    avisHotel29,
    avisHotel30,
    avisHotel31,
    avisHotel32,
    avisHotel33,
    avisHotel34,
    avisHotel35,
    avisHotel36,
    avisHotel37,
    avisHotel38,
    avisHotel39,
    avisHotel40,
    avisHotel41,
    avisHotel42,
    avisHotel43,
    avisHotel44,
    avisHotel45,
    avisHotel46,
    avisHotel47,
    avisHotel48,
    avisHotel49,
    avisHotel50,
];

// 50 avis pour VOL
const avisVol1 = {
    five: "Vol parfait, personnel attentionné et service excellent.",
    four: "Bon vol, léger retard mais service correct.",
    three: "Vol correct, confort moyen.",
    two: "Vol retardé, peu de communication.",
    one: "Vol catastrophe : bagages perdus et service inexistant.",
};
const avisVol2 = {
    five: "Sièges confortables et équipage souriant.",
    four: "Vol satisfaisant, snacks limités.",
    three: "Siège étroit mais vol acceptable.",
    two: "Personnel peu serviable.",
    one: "Retard long et aucune aide.",
};
const avisVol3 = {
    five: "Ponctuel et agréable, très bonne expérience.",
    four: "Bien mais bruit important.",
    three: "Moyen, trop de passagers.",
    two: "Vol stressant et mal organisé.",
    one: "Vol annulé sans compensation.",
};
const avisVol4 = {
    five: "Très bon confort, personnel professionnel.",
    four: "Satisfaisant, mais embarquement lent.",
    three: "Vol correct, mais peu d'espace.",
    two: "Bagages endommagés à l'arrivée.",
    one: "Service désastreux, aucune organisation.",
};
const avisVol5 = {
    five: "Expérience premium, service impeccable.",
    four: "Bon vol, service ok.",
    three: "Standard, rien d'exceptionnel.",
    two: "Retard et mauvaise communication.",
    one: "Vol épouvantable, personnel impoli.",
};
const avisVol6 = {
    five: "Sièges larges et personnel efficace.",
    four: "Vol agréable malgré un léger retard.",
    three: "Correct, mais confort moyen.",
    two: "Restauration insuffisante.",
    one: "Vol annulé, perte de journée.",
};
const avisVol7 = {
    five: "Confort et ponctualité, parfait.",
    four: "Bon vol, service rapide.",
    three: "Moyen, manque de confort.",
    two: "Retard et mauvaise gestion.",
    one: "Baggages perdus et aucun suivi.",
};
const avisVol8 = {
    five: "Équipage professionnel et attentionné.",
    four: "Vol convenable, embarquement long.",
    three: "Correct, siège étroit.",
    two: "Inconfortable et bruyant.",
    one: "Très mauvaise expérience, évitez cette compagnie.",
};
const avisVol9 = {
    five: "Vol smooth, aucun souci.",
    four: "Satisfaisant, petite attente.",
    three: "Moyen, service minimal.",
    two: "Retard prolongé sans infos.",
    one: "Expérience terrible, vol chaotique.",
};
const avisVol10 = {
    five: "Service excellent, vol confortable.",
    four: "Bon vol, boissons limitées.",
    three: "Vol correct pour le prix.",
    two: "Retard et bagages retardés.",
    one: "Aucun support clientèle, vol à éviter.",
};
const avisVol11 = {
    five: "Parfait du début à la fin, très pro.",
    four: "Vol agréable, personnel poli.",
    three: "Passable, pas de luxe.",
    two: "Mauvaise gestion des bagages.",
    one: "Annulation sans solution, très mauvais.",
};
const avisVol12 = {
    five: "Ponctualité et confort, top.",
    four: "Bon vol mais place serrée.",
    three: "Correct, mais long.",
    two: "Resto à bord médiocre.",
    one: "Vol horrible, bagages perdus.",
};
const avisVol13 = {
    five: "Équipage top et service rapide.",
    four: "Vol bien organisé.",
    three: "Moyen, manque d'espace.",
    two: "Retard important.",
    one: "Chaotique, aucune information.",
};
const avisVol14 = {
    five: "Très bonne compagnie, je recommande.",
    four: "Satisfaisant malgré un petit retard.",
    three: "Correct pour un vol court.",
    two: "Personnel peu aidant.",
    one: "Expérience déplorable, bagages abîmés.",
};
const avisVol15 = {
    five: "Confort et services irréprochables.",
    four: "Vol bien passé.",
    three: "Assez correct.",
    two: "Retard et manque de communication.",
    one: "Très déçu, vol annulé sans aide.",
};
const avisVol16 = {
    five: "Vol premium, excellent équipage.",
    four: "Bon vol, service présent.",
    three: "Moyen, aucun luxe.",
    two: "Problèmes d'embarquement.",
    one: "Aucun suivi après incident.",
};
const avisVol17 = {
    five: "Siège confortable et personnel souriant.",
    four: "Vol correct, dommage le retard.",
    three: "Acceptable, rien d'exceptionnel.",
    two: "Retard important, mauvaise prise en charge.",
    one: "Perte de bagages et aucune aide.",
};
const avisVol18 = {
    five: "Expérience très confortable et ponctuelle.",
    four: "Bon vol, service minimum.",
    three: "Moyen, beaucoup de monde.",
    two: "Hôtesse impolie.",
    one: "Service inexistant, évitez.",
};
const avisVol19 = {
    five: "Voyage agréable, bon rapport qualité/prix.",
    four: "Satisfaisant, un peu bruyant.",
    three: "Correct pour le prix payé.",
    two: "Retard et mauvaise communication.",
    one: "Vol annulé, trop d'attente.",
};
const avisVol20 = {
    five: "Vol excellent, équipage très pro.",
    four: "Bon vol malgré un léger retard.",
    three: "Moyen, sièges serrés.",
    two: "Problèmes au sol non gérés.",
    one: "Expérience catastrophique.",
};
const avisVol21 = {
    five: "Service haut de gamme et ponctuel.",
    four: "Très bon confort.",
    three: "Correct mais sans extras.",
    two: "Retard prolongé.",
    one: "Très mauvaise gestion, bagages perdus.",
};
const avisVol22 = {
    five: "Vol impeccable, rien à redire.",
    four: "Bon vol, personnel courtois.",
    three: "Moyen, passagers nombreux.",
    two: "Peu d'informations durant le retard.",
    one: "Vol annulé sans prise en charge.",
};
const avisVol23 = {
    five: "Confortable et rapide, top.",
    four: "Satisfaisant, quelques turbulences.",
    three: "Correct, service minimal.",
    two: "Restauration décevante.",
    one: "Vol chaotique, aucune aide.",
};
const avisVol24 = {
    five: "Équipage professionnel et attentif.",
    four: "Vol agréable malgré le retard.",
    three: "Assez correct.",
    two: "Problèmes fréquents de logistique.",
    one: "Aucun service, très mauvais.",
};
const avisVol25 = {
    five: "Très bonne expérience, siège confortable.",
    four: "Bon vol, je recommande.",
    three: "Moyen, rien d'exceptionnel.",
    two: "Retard non expliqué.",
    one: "Perte de bagages et mauvaise gestion.",
};
const avisVol26 = {
    five: "Ponctuel, propre et agréable.",
    four: "Vol satisfaisant.",
    three: "Correct, services limités.",
    two: "Mauvaise communication.",
    one: "Expérience désastreuse.",
};
const avisVol27 = {
    five: "Super vol, personnel très aidant.",
    four: "Bien organisé, léger retard.",
    three: "Acceptable pour un court trajet.",
    two: "Retard et incertitudes.",
    one: "Annulé sans solution de rechange.",
};
const avisVol28 = {
    five: "Vol confortable et efficace.",
    four: "Bon vol, service correct.",
    three: "Moyen, siège étroit.",
    two: "Problèmes de bagages.",
    one: "Situation cauchemardesque, évitez.",
};
const avisVol29 = {
    five: "Équipage pro, service fluide.",
    four: "Vol standard mais agréable.",
    three: "Correct mais serré.",
    two: "Retard prolongé sans infos.",
    one: "Très mauvaise expérience au sol.",
};
const avisVol30 = {
    five: "Vol excellent, très satisfait.",
    four: "Satisfaisant malgré un retard mineur.",
    three: "Moyen, service minimal.",
    two: "Retard et mauvaise prise en charge.",
    one: "Bagages perdus et aucune aide.",
};
const avisVol31 = {
    five: "Confort remarquable et équipage top.",
    four: "Bon confort, service correct.",
    three: "Correct, pas de luxe.",
    two: "Restauration médiocre.",
    one: "Aucun suivi en cas d'incident.",
};
const avisVol32 = {
    five: "Voyage parfait, mise en place professionnelle.",
    four: "Vol bien géré.",
    three: "Acceptable, siège étroit.",
    two: "Retard non expliqué.",
    one: "Service client inexistant.",
};
const avisVol33 = {
    five: "Expérience premium, tout s'est bien passé.",
    four: "Vol agréable et calme.",
    three: "Moyen, bruyant.",
    two: "Problèmes d'organisation.",
    one: "Annulation et aucun soutien.",
};
const avisVol34 = {
    five: "Très bon vol, équipage souriant.",
    four: "Satisfaisant, quelques délais.",
    three: "Correct, mais trop de monde.",
    two: "Peu d'informations et retard.",
    one: "Vol chaotique et indigne.",
};
const avisVol35 = {
    five: "Service impeccable et ponctualité.",
    four: "Bon vol, je recommande.",
    three: "Assez correct.",
    two: "Retard et bagages retardés.",
    one: "Expérience catastrophique.",
};
const avisVol36 = {
    five: "Confort et efficacité, top.",
    four: "Très bien pour le prix.",
    three: "Moyen, acceptable.",
    two: "Problèmes récurrents de logistique.",
    one: "Très mauvaise gestion des incidents.",
};
const avisVol37 = {
    five: "Vol excellent, très bon équipage.",
    four: "Satisfaisant, quelques attentes.",
    three: "Correct, sans extras.",
    two: "Inconfort notable.",
    one: "Bagages perdus, aucun support.",
};
const avisVol38 = {
    five: "Ponctuel et confortable, parfait.",
    four: "Bon vol malgré petit retard.",
    three: "Moyen, passagers nombreux.",
    two: "Restauration décevante.",
    one: "Aucun service après incident.",
};
const avisVol39 = {
    five: "Voyage sans souci, service top.",
    four: "Vol agréable, bonne organisation.",
    three: "Correct, siège serré.",
    two: "Retard prolongé.",
    one: "Annulation et aucune solution.",
};
const avisVol40 = {
    five: "Équipage très pro, vol agréable.",
    four: "Bon voyage, recommande.",
    three: "Assez correct.",
    two: "Pas assez d'informations durant le retard.",
    one: "Service client inexistant après problème.",
};
const avisVol41 = {
    five: "Expérience sans faute, très bien.",
    four: "Satisfaisant, bien organisé.",
    three: "Correct pour un trajet court.",
    two: "Retard long, mauvaise communication.",
    one: "Désastreux, vols annulés.",
};
const avisVol42 = {
    five: "Service haut de gamme, très satisfait.",
    four: "Bonne expérience globale.",
    three: "Moyen, pas mal.",
    two: "Retard et équipements limités.",
    one: "Extrêmement décevant, évitez.",
};
const avisVol43 = {
    five: "Vol parfait, je recommande la compagnie.",
    four: "Bon vol malgré un léger retard.",
    three: "Acceptable, mais serré.",
    two: "Retard et information pauvre.",
    one: "Vol annulé, très mauvaise prise en charge.",
};
const avisVol44 = {
    five: "Très satisfait, très bonne organisation.",
    four: "Vol correct, service présent.",
    three: "Moyen, confortable pour court trajet.",
    two: "Restauration faible.",
    one: "Aucun accompagnement en cas d'incident.",
};
const avisVol45 = {
    five: "Confort remarquable, équipage pro.",
    four: "Bon vol, ponctuel.",
    three: "Correct, pas de luxe.",
    two: "Problèmes au sol mal gérés.",
    one: "Baggages perdus et aucune aide.",
};
const avisVol46 = {
    five: "Voyage agréable, tout bien organisé.",
    four: "Satisfaisant, recommande.",
    three: "Moyen, pas exceptionnel.",
    two: "Retard important sans explication.",
    one: "Expérience calamiteuse.",
};
const avisVol47 = {
    five: "Parfait, rien à signaler.",
    four: "Très bien, service convenable.",
    three: "Passable, correct.",
    two: "Retard pénible.",
    one: "Aucun support client, horreur.",
};
const avisVol48 = {
    five: "Service parfait, équipage attentionné.",
    four: "Bon vol, recommande.",
    three: "Correct pour le prix.",
    two: "Retard et mauvaise communication.",
    one: "Annulation sans solution de rechange.",
};
const avisVol49 = {
    five: "Très bon confort et ponctualité.",
    four: "Satisfaisant malgré petites attentes.",
    three: "Moyen, siège étroit.",
    two: "Problèmes de logistique.",
    one: "Expérience à oublier.",
};
const avisVol50 = {
    five: "Vol impeccable, service 5 étoiles.",
    four: "Bon vol, personnel efficace.",
    three: "Correct mais serré.",
    two: "Retard important et mauvaise prise en charge.",
    one: "Catastrophique, aucun suivi après incident.",
};

const avisVolArray = [
    avisVol1,
    avisVol2,
    avisVol3,
    avisVol4,
    avisVol5,
    avisVol6,
    avisVol7,
    avisVol8,
    avisVol9,
    avisVol10,
    avisVol11,
    avisVol12,
    avisVol13,
    avisVol14,
    avisVol15,
    avisVol16,
    avisVol17,
    avisVol18,
    avisVol19,
    avisVol20,
    avisVol21,
    avisVol22,
    avisVol23,
    avisVol24,
    avisVol25,
    avisVol26,
    avisVol27,
    avisVol28,
    avisVol29,
    avisVol30,
    avisVol31,
    avisVol32,
    avisVol33,
    avisVol34,
    avisVol35,
    avisVol36,
    avisVol37,
    avisVol38,
    avisVol39,
    avisVol40,
    avisVol41,
    avisVol42,
    avisVol43,
    avisVol44,
    avisVol45,
    avisVol46,
    avisVol47,
    avisVol48,
    avisVol49,
    avisVol50,
];

// console.log(
//   `Avis hôtel: ${avisHotelArray[Math.floor(Math.random() * 51)]?.one}\nAvis Vol: ${avisVolArray[Math.floor(Math.random() * 51)]?.one}`
// );

let avisHotel = "";
let avisVol = "";
const createRating = () => {
    const randomHotelRating =
        avisHotelArray[Math.floor(Math.random() * avisHotelArray.length)];
    const hotelKeys = Object.keys(randomHotelRating);
    const randomHotelKey =
        hotelKeys[Math.floor(Math.random() * hotelKeys.length)];

    const hotelRating = randomHotelRating[randomHotelKey];
    const hotelStars = (() => {
        switch (randomHotelKey) {
            case "five":
                return 5;
            case "four":
                return 4;
            case "three":
                return 3;
            case "two":
                return 2;
            case "one":
                return 1;
        }
    })();

    const randomFlightRating =
        avisVolArray[Math.floor(Math.random() * avisVolArray.length)];
    const flightKeys = Object.keys(randomFlightRating);
    const randomFlightKey =
        flightKeys[Math.floor(Math.random() * flightKeys.length)];

    const flightRating = randomFlightRating[randomFlightKey];
    const flightStars = (() => {
        switch (randomFlightKey) {
            case "five":
                return 5;
            case "four":
                return 4;
            case "three":
                return 3;
            case "two":
                return 2;
            case "one":
                return 1;
        }
    })();

    const id_reservation = Math.floor(Math.random() * 38000 + 1);

    return {
        note_hotel: hotelStars,
        avis_hotel: hotelRating,
        note_compagnie_aerienne: flightStars,
        avis_compagnie_aerienne: flightRating,
        id_reservation,
    };
};

let evaluation =
    "NUM_EVALUATION,NUM_RESERVATION,NOTE_HOTEL,AVIS_HOTEL,NOTE_COMPAGNIE_AERIENNE,AVIS_COMPAGNIE_AERIENNE\n";

function checkExistence(array, newElement) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === newElement) return true;
    }

    return false;
}

const registeredRatings = [];

for (let i = 0; i < 4500; i++) {
    let {
        note_hotel,
        avis_hotel,
        note_compagnie_aerienne,
        avis_compagnie_aerienne,
        id_reservation,
    } = createRating();

    avis_hotel = avis_hotel.replaceAll("'", "''");
    avis_compagnie_aerienne = avis_compagnie_aerienne.replaceAll("'", "''");

    const randomItem =
        obj[Math.floor(Math.random() * obj.length)].NUM_RESERVATION;

    if (checkExistence(registeredRatings, randomItem)) {
        i--;
        continue;
    }

    evaluation += `${
        i + 1
    },${randomItem},${note_hotel},"${avis_hotel}",${note_compagnie_aerienne},"${avis_compagnie_aerienne}"\n`;

    registeredRatings.push(randomItem);
}

fs.writeFileSync("csv/evaluation.csv", evaluation);

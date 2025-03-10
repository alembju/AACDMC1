

const mongoose = require('mongoose')

const MeningitsSchema= new mongoose.Schema({
    startDate:Date,
    pname:String,
    MRN:String,
    Age:String,
    Sex:String,
    Pregnancy:String,
    PPhone:String,
    PRegion:String,
    PSubCity:String,
    PWoreda:String,
    pTWoreda:String,
    SpecificA:String,
    Ketena:String,
    HNumber:String,
    POccupation:String,
    TPOccupation:String,
    FacilityT:String,
    TFacilityT:String,
    HFName:String,
    HFTName:String,
    SpecifyF:String,
    HRegion:String,
    HTRegion:String,
    HSubCity:String,
    THSubCity:String,
    HWoreda:String,
    HFTworeda:String,
    DReporting:Date,
    seenDate:Date,
    Odisease:Date,
    Cfeature:String,
    SampleT:String,
    DSampleT:Date,
    SampleTT:String,
    SampleTR:String,
    SampleTPG:String,
    Pcategory:String,
    Preferral:String,
    TPreferral:String,
    AdmissionS:String,
    DAdmissionS:Date,
    AdmissionSDD:Date,

    Antibiotics:String,
    Symptoms:String,
    Poutcome:String,
    Sequelae:String,
    Specimen:String,
    DSpecimen:Date,
    CSF:String,
    Transportation:String,
    Macroscopic:String,
    SQuantity:String,
    IdentificationN:String,
    Results:String,
    GramStain:String,
    RapidT:String,
    WBC:String,
    Glucose:String,
    Protein:String,
    Agglutination:String,
    Culture:String,
    DReferenceL:Date,
    NationalR:String,
    NCulture:String,
    PCR:String,
    WHOCentre:String,
    NWHOCentre:String,
    DWHOCentre:Date,
    DResultWHO:Date,
    WHOPCR:String,
    Genotype:String,
    FResult:String,
    Classification:String,
    Observations:String,

    Poutcome:String,
    Comorbidity:String,
    TComorbidity:String,
    FCName:String,
    Phone:String,
    EPIWeek:String,
    pdf: String,
},
{ collection: "Meningits" }
);  
 mongoose.model("Meningits" , MeningitsSchema)
//module.exports = ResearchMondel
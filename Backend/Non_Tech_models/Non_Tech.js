const mongoose = require('mongoose');


const commonSchema = {
    Name: { type: String, required: true },
    Email: { type: String, required: true },
    Phone_No: { type: String, required: true },
    College: { type: String, required: true },
    Accommodation: { 
        type: String, 
        enum: ['With Accommodation', 'Without Accommodation'], 
        required: true 
    }, 
};


const IPL = new mongoose.Schema(commonSchema);
const E_Sports = new mongoose.Schema(commonSchema);
const GoogleMap = new mongoose.Schema(commonSchema);
const Story = new mongoose.Schema(commonSchema);


const IPLS = mongoose.models.IPLS || mongoose.model('IPLS', IPL);
const ESPORTS = mongoose.models.ESPORTS || mongoose.model('ESPORTS', E_Sports);
const GoogleS = mongoose.models.GoogleS || mongoose.model('GoogleS', GoogleMap);
const StoryS = mongoose.models.StoryS || mongoose.model('StoryS', Story);

// Export models
module.exports = { IPLS, ESPORTS, GoogleS, StoryS };

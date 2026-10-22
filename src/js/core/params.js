/*
===============================================================
Defining Parameter Variables
===============================================================
*/

var stimFolder = 'src/assets/stimuli/light/'

var runIntro = true;
var runInstr = true;
var runExpt = true;
var runClose = true;
var runPreload = true;

/*
---------------------------------------------------------------
Live tunable experiment hyperparameters (Sets Defaults)
---------------------------------------------------------------
Sets default DEFAULT values for adjustable experiment variables that may
later need to change while the experiment is still live.  
These defaults are used when running locally, or when an 
experiment has no backend config set. At runtime, the experiment pulls `config` 
from the WAVE backend (if available) and merges it OVER these defaults 
(see initExperiment() in timeline.js). A researcher can thus easily change
a one of these variables (via the setup_experiment.ipynb notebook / API)
instead of having to edit the file and do PRs.

*/


var CONFIG_DEFAULTS = {
    number_of_repetitions: 1,
    dark_locations: ['3', '5'],
    display_durations: [1000, 1500, 2000, 2500]
};

// Defining Core Variables that remain constant
var PRESTIM_DISP_TIME = 800; // blank screen time
var FIXATION_DISP_TIME = 500; // fixation cross display time
var MASK_DISP_TIME = 100;

// Variables for Participant Information
var estTotalRunTime = 3;
var estDollars = 0.45;
var participantType = 'prolific';
var completionCode = 'C4MF2IV1';
var prolific_url = 'https://app.prolific.co/submissions/complete?cc='+completionCode;

// WAVE Backend Configuration
var waveBackendUrl = 'https://wave-backend-production-8781.up.railway.app';
// var waveBackendUrl = 'http://localhost:8000';  // For local development

// initializing variables
var timelinebase = [];
var timelineintro = [];
var timelineinstr = [];
var timelineexpt = [];
var timelineclose = [];
var forPreload = [];
var full_check = false;
var w =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
var h =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;



// Original render dimensions
var origWidth = 1920;
var origHeight = 1080;

// Display dimensions
var imgWidth = 600;
var imgHeight = (imgWidth / origWidth) * origHeight;



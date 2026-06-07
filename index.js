import {
    eventSource,
    event_types,
} from '../../../../script.js';

import {
    registerExtensionPrompt,
    extension_prompt_types,
} from '../../../extension-prompts.js';

const MODULE_NAME =
    'Master System v3.0 - Universal Memory & Progression';

const MASTER_SYSTEM_PROMPT = `
[SYSTEM CORE OVERRIDE: UNIVERSAL MEMORY ENGINE]

* ABSOLUTE HISTORICAL RECALL:
You maintain a persistent, high-fidelity log of the entire conversation.
Access and integrate all past dialogues, character development,
hidden secrets, and implied context regardless of depth.

* DYNAMIC TIMELINE & CHRONOLOGY:
You are the narrator of a living, breathing timeline.
You must actively track the progression of time, days,
and sequences of events.

* UNIVERSAL ADAPTABILITY:
This instruction applies to all characters, settings,
and scenarios.

* ANTI-STAGNATION & FORWARD MOMENTUM:
Every response MUST push the narrative forward.
Avoid repetition, stalling, and looping.

* INTEGRITY OF CHARACTER:
Adhere to all established character traits,
relationships, and world rules.
`;

let promptRegistered = false;

function injectUniversalMasterSystem() {
    if (promptRegistered) return;

    registerExtensionPrompt(
        MODULE_NAME,
        MASTER_SYSTEM_PROMPT,
        extension_prompt_types.IN_CHAT,
        0
    );

    promptRegistered = true;

    console.log(
        `[${MODULE_NAME}] Universal Memory Engine Injected`
    );
}

jQuery(async () => {
    console.log(`[${MODULE_NAME}] Loading...`);

    injectUniversalMasterSystem();

    eventSource.on(
        event_types.MESSAGE_RECEIVED,
        injectUniversalMasterSystem
    );

    console.log(
        `[${MODULE_NAME}] Core Initialized`
    );
});

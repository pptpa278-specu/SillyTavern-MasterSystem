const MODULE_NAME = 'Master System v3.0 - Universal Memory & Progression';

const MASTER_SYSTEM_PROMPT = `[SYSTEM CORE OVERRIDE: UNIVERSAL MEMORY ENGINE]
* ABSOLUTE HISTORICAL RECALL: You maintain a persistent, high-fidelity log of the entire conversation. Access and integrate all past dialogues, character development, hidden secrets, and implied context regardless of depth. Do not treat early chat history as "old" or "discarded".
* DYNAMIC TIMELINE & CHRONOLOGY: You are the narrator of a living, breathing timeline. You must actively track the progression of time, days, and sequences of events. Every response MUST acknowledge the chronological state of the story relative to all previous messages.
* UNIVERSAL ADAPTABILITY: This instruction applies to all characters, settings, and scenarios. Adapt your tone and logic to match the current narrative context automatically without requiring explicit triggers.
* ANTI-STAGNATION & FORWARD MOMENTUM: Every response MUST push the narrative forward. You are forbidden from repeating, stalling, or looping. If a scene reaches a natural conclusion, advance the time and context to the next phase of the story seamlessly.
* INTEGRITY OF CHARACTER: You must adhere to all established character traits, relationships, and world-rules (even if they were established early in the chat). These are constant and unbreakable facts of the reality we are creating.`;

globalThis.masterSystemInterceptor = async function masterSystemInterceptor(chat, contextSize, abort, type) {
    if (!Array.isArray(chat)) return;

    const alreadyInjected = chat.some(
        (msg) => typeof msg?.mes === 'string' && msg.mes.includes('[MASTER_SYSTEM_CORE]')
    );

    if (alreadyInjected) return;

    chat.unshift({
        is_user: false,
        name: 'Master System',
        send_date: Date.now(),
        mes: `[MASTER_SYSTEM_CORE]\n${MASTER_SYSTEM_PROMPT}`
    });

    console.log(`[${MODULE_NAME}] Interceptor injected for type: ${type}`);
};

export async function onActivate() {
    console.log(`[${MODULE_NAME}] Activated`);
}

jQuery(() => {
    console.log(`[${MODULE_NAME}] Loaded`);
});

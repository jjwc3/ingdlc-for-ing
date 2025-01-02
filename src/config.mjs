// 기본 설정
const defaultConfig = {
    cafe: {
        read: {
            enabled: 1,
            read: {}
        }
    }
}

const getConfig = async (key) => {
    const subKeys = key.split(".");
    let pointer = (await chrome.storage.local.get("config"))?.config;
    let defaultPointer = defaultConfig;

    subKeys.forEach(subKey => {
        if (pointer == null || pointer[subKey] === undefined) pointer = defaultPointer[subKey];
        else pointer = pointer[subKey];

        defaultPointer = defaultPointer[subKey];
    });

    return pointer;
}

const setConfig = async (key, value) => {
    const config = (await chrome.storage.local.get("config"))?.config;
    const subKeys = key.split(".");

    const newConfig = config ? config : {};
    let pointer = newConfig;

    for (let i = 0; i < subKeys.length - 1; i++){
        const subKey = subKeys[i];

        if (pointer[subKey] === undefined) pointer[subKey] = {};

        pointer = pointer[subKey];
    }

    pointer[subKeys[subKeys.length - 1]] = value;

    await chrome.storage.local.set({ config: newConfig });
}




export { getConfig, setConfig };
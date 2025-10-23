// Async-like wrappers around localStorage to simulate a tiny API

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export async function load(key, defaultValue) {
  await delay(300); // simulate network latency
  try {
    const raw = localStorage.getItem(key);
    console.log ("todos")
    console.log (raw)
    return raw ? JSON.parse(raw) : defaultValue;
  } catch {
    return defaultValue;
  }
}

export async function save(key, value) {
  await delay(150);
  localStorage.setItem(key, JSON.stringify(value));
}

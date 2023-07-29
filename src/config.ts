let process: any;

const p = process?.env ? process.env : import.meta.env;

export const IFPA_CONFIG = {
	"apiKey": p.VITE_IFPA_APIKEY || p.IFPA_KEY
}
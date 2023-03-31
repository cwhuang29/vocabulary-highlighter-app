import { HIGHLIGHTER_BG_COLORS, HIGHLIGHTER_FONT_SIZE, LANGS } from 'shared/constants/index';
import { EXT_STORAGE_CONFIG } from 'shared/constants/storage';
import storage from 'shared/storage';
import logger from 'shared/utils/logger';
import { isArray, isObject } from 'shared/utils/misc';

export const DEFAULT_CONFIG = {
  highlightColor: HIGHLIGHTER_BG_COLORS.YELLOW,
  language: LANGS.en,
  fontSize: HIGHLIGHTER_FONT_SIZE.MEDIUM,
  showDetail: true,
  collectedWords: [],
  suspendedPages: [],
};

export const NUM_OF_CONFIG_OPTIONS = Object.keys(DEFAULT_CONFIG).length;

export const isConfigEqual = (config1 = {}, config2 = {}) => {
  const c1 = isObject(config1) ? config1 : JSON.parse(config1);
  const c2 = isObject(config2) ? config2 : JSON.parse(config2);

  if (Object.keys(c1).length !== Object.keys(c2).length) {
    return false;
  }

  return Object.entries(c1).filter(([key, val]) => (isArray(val) ? val.length !== c2[key].length : val !== c2[key])).length === 0;
};

export const setupDefaultConfigIfNotExist = async () => {
  let config = await storage.getData(EXT_STORAGE_CONFIG);

  if (!config || Object.keys(config).length === 0) {
    config = DEFAULT_CONFIG;
    await storage.setData(EXT_STORAGE_CONFIG, config);
  }
  logger(`Get config after installation. Config: ${JSON.stringify(config)}`);
};

export const setURLToConfigFormat = url => {
  const u = typeof url === 'string' ? new URL(url) : url;
  return `${u.protocol}-${u.host}`;
};

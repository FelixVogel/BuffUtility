module ExtensionSettings {

    DEBUG && console.debug('[BuffUtility] Module.ExtensionSettings');

    export const FLOAT_RANGES: [number, [string, string]][] = [
        // FN
        [0.01, ['0.00', '0.01']],
        [0.02, ['0.01', '0.02']],
        [0.03, ['0.02', '0.03']],
        [0.04, ['0.03', '0.04']],
        [0.07, ['0.04', '0.07']],
        // MW
        [0.08, ['0.07', '0.08']],
        [0.09, ['0.08', '0.09']],
        [0.10, ['0.09', '0.10']],
        [0.11, ['0.10', '0.11']],
        [0.15, ['0.11', '0.15']],
        // FT
        [0.18, ['0.15', '0.18']],
        [0.21, ['0.18', '0.21']],
        [0.24, ['0.21', '0.24']],
        [0.27, ['0.24', '0.27']],
        [0.38, ['0.27', '0.38']],
        // WW
        [0.39, ['0.38', '0.39']],
        [0.40, ['0.39', '0.40']],
        [0.41, ['0.40', '0.41']],
        [0.42, ['0.41', '0.42']],
        [0.45, ['0.42', '0.45']],
        // BS
        [0.50, ['0.45', '0.50']],
        [0.63, ['0.50', '0.63']],
        [0.76, ['0.63', '0.76']],
        [0.90, ['0.76', '0.90']],
        [1.00, ['0.90', '1.00']],
    ];

    export const enum DifferenceDominator {
        STEAM,
        BUFF
    }

    export const enum ExpandScreenshotType {
        PREVIEW,
        INSPECT
    }

    export const enum FOP_VALUES {
        Auto,
        w245xh230,
        w490xh460,
        w980xh920,
        w1960xh1840,
        w3920xh3680,
    }

    export const enum LOCATION_RELOAD_NEWEST_VALUES {
        NONE,
        BULK,
        SORT,
        CENTER,
        LEFT
    }

    export const enum PriceHistoryRange {
        OFF = 0,
        WEEKLY = 7,
        MONTHLY = 30
    }

    export const FILTER_SORT_BY = {
        'Default': 'default',
        'Newest': 'created.desc',
        'Price Ascending': 'price.asc',
        'Price Descending': 'price.desc',
        'Float Ascending': 'paintwear.asc',
        'Float Descending': 'paintwear.desc',
        'Hot Descending': 'heat.desc',
        'Sticker': 'sticker.desc'
    };

    export const FILTER_STICKER_SEARCH = {
        'All': '',
        'Stickers': '&extra_tag_ids=non_empty',
        'Stickers 100%': '&extra_tag_ids=non_empty&wearless_sticker=1',
        'No Stickers': '&extra_tag_ids=empty',
        'Quad Combos': '&extra_tag_ids=squad_combos',
        'Quad Combos 100%': '&extra_tag_ids=squad_combos&wearless_sticker=1',
        'Save Custom': '&extra_tag_ids=$1'
    };

    export interface SteamSettings {
        readonly wallet_fee: number,
        readonly wallet_fee_base: number,
        readonly wallet_fee_percent: number,
        readonly wallet_fee_minimum: number
    }

    export const STEAM_SETTINGS: SteamSettings = {
        wallet_fee: 1,
        wallet_fee_base: 0,
        wallet_fee_percent: 0.05,
        wallet_fee_minimum: 1
    };

    export const enum Settings {
        VERSION = 'version',
        SELECTED_CURRENCY = 'selected_currency',
        CUSTOM_CURRENCY_RATE = 'custom_currency_rate',
        CUSTOM_CURRENCY_NAME = 'custom_currency_name',
        CAN_EXPAND_SCREENSHOTS = 'can_expand_screenshots',
        EXPAND_SCREENSHOTS_BACKDROP = 'expand_screenshots_backdrop',
        DIFFERENCE_DOMINATOR = 'difference_dominator',
        APPLY_STEAM_TAX = 'apply_steam_tax',
        APPLY_CURRENCY_TO_DIFFERENCE = 'apply_currency_to_difference',
        EXPAND_TYPE = 'expand_type',
        CUSTOM_FOP = 'custom_fop',
        DEFAULT_SORT_BY = 'default_sort_by',
        DEFAULT_STICKER_SEARCH = 'default_sticker_search',
        STORED_CUSTOM_STICKER_SEARCH = 'stored_custom_sticker_search',
        LEECH_CONTRIBUTOR_KEY = 'leech_contributor_key',
        SHOW_TOAST_ON_ACTION = 'show_toast_on_action',
        LISTING_OPTIONS = 'listing_options',
        SHOW_FLOAT_BAR = 'show_float_bar',
        COLOR_LISTINGS = 'color_listings',
        DATA_PROTECTION = 'data_protection',
        COLOR_SCHEME = 'color_scheme',
        USE_SCHEME = 'use_scheme',
        LOCATION_RELOAD_NEWEST = 'location_reload_newest',

        // 2.1.9 -> setting will be moved to advanced settings
        EXPERIMENTAL_ALLOW_FAVOURITE_BARGAIN = 'allow_favourite_bargain',
        // 2.1.9 -> setting will be removed, default procedure
        EXPERIMENTAL_ADJUST_POPULAR = 'experimental_adjust_popular',
        // 2.1.9 -> setting will be merged into show toast on action
        EXPERIMENTAL_FETCH_NOTIFICATION = 'experimental_fetch_notification',
        // [TBA] -> setting will be moved to advanced settings
        EXPERIMENTAL_FETCH_FAVOURITE_BARGAIN_STATUS = 'fetch_favourite_bargain_status',
        // [TBA] -> setting will be moved to advanced settings
        EXPERIMENTAL_FETCH_ITEM_PRICE_HISTORY = 'fetch_item_price_history',
        // 2.1.9 -> setting will be moved to advanced settings
        EXPERIMENTAL_ADJUST_MARKET_CURRENCY = 'adjust_market_currency',
        // 2.1.9 -> setting will be moved to advanced settings
        EXPERIMENTAL_FORMAT_CURRENCY = 'format_currency',
        // [TBA] -> setting will be removed, default procedure
        EXPERIMENTAL_ADJUST_SHOP = 'experimental_adjust_shop',
        // 2.1.9 -> setting will be removed, default procedure
        EXPERIMENTAL_ADJUST_SHARE = 'experimental_adjust_share',
        // 2.1.9 -> setting will be moved to advanced settings
        EXPERIMENTAL_ALLOW_BULK_BUY = 'allow_bulk_buy',
        // [TBA] -> setting will be moved to advanced settings
        EXPERIMENTAL_SHOW_LISTING_DATE= 'show_listing_date',

        STORE_DANGER_AGREEMENTS = 'store_danger_agreements'
    }

    type SettingsTypes = {
        [Settings.VERSION]: string;
        [Settings.SELECTED_CURRENCY]: string;
        [Settings.CUSTOM_CURRENCY_RATE]: number;
        [Settings.CUSTOM_CURRENCY_NAME]: string;
        [Settings.CAN_EXPAND_SCREENSHOTS]: boolean;
        [Settings.EXPAND_SCREENSHOTS_BACKDROP]: boolean;
        [Settings.DIFFERENCE_DOMINATOR]: DifferenceDominator;
        [Settings.APPLY_STEAM_TAX]: boolean;
        [Settings.APPLY_CURRENCY_TO_DIFFERENCE]: boolean;
        [Settings.EXPAND_TYPE]: ExpandScreenshotType;
        [Settings.CUSTOM_FOP]: number;
        [Settings.DEFAULT_SORT_BY]: string;
        [Settings.DEFAULT_STICKER_SEARCH]: string;
        [Settings.STORED_CUSTOM_STICKER_SEARCH]: string;
        [Settings.LEECH_CONTRIBUTOR_KEY]: string;
        [Settings.SHOW_TOAST_ON_ACTION]: boolean;
        [Settings.LISTING_OPTIONS]: boolean[];
        [Settings.SHOW_FLOAT_BAR]: boolean;
        [Settings.COLOR_LISTINGS]: [boolean, boolean];
        [Settings.DATA_PROTECTION]: boolean;
        [Settings.COLOR_SCHEME]: string[];
        [Settings.USE_SCHEME]: boolean;
        [Settings.LOCATION_RELOAD_NEWEST]: number;

        [Settings.EXPERIMENTAL_ALLOW_FAVOURITE_BARGAIN]: boolean;
        [Settings.EXPERIMENTAL_ADJUST_POPULAR]: boolean;
        [Settings.EXPERIMENTAL_FETCH_NOTIFICATION]: boolean;
        [Settings.EXPERIMENTAL_FETCH_FAVOURITE_BARGAIN_STATUS]: boolean;
        [Settings.EXPERIMENTAL_FETCH_ITEM_PRICE_HISTORY]: PriceHistoryRange;
        [Settings.EXPERIMENTAL_ADJUST_MARKET_CURRENCY]: boolean;
        [Settings.EXPERIMENTAL_FORMAT_CURRENCY]: boolean;
        [Settings.EXPERIMENTAL_ADJUST_SHOP]: boolean;
        [Settings.EXPERIMENTAL_ADJUST_SHARE]: boolean;
        [Settings.EXPERIMENTAL_ALLOW_BULK_BUY]: boolean;
        [Settings.EXPERIMENTAL_SHOW_LISTING_DATE]: boolean;

        [Settings.STORE_DANGER_AGREEMENTS]: boolean[];
    }

    const DANGER_SETTINGS: Settings[] = [
        Settings.EXPERIMENTAL_FETCH_FAVOURITE_BARGAIN_STATUS,
        Settings.EXPERIMENTAL_FETCH_ITEM_PRICE_HISTORY
    ];

    const enum InternalStructureTransform {
        NONE,
        BOOLEAN,
        BOOLEAN_ARRAY
    }

    type InternalSetting<T extends Settings> = {
        value?: SettingsTypes[T],
        resolved?: boolean,
        readonly default: SettingsTypes[T],
        readonly export: string,
        readonly transform: InternalStructureTransform,
        readonly validator: (key: Settings, value: any) => any
    };
    
    type InternalSettingStructure = {
        [key in Settings]: InternalSetting<key>
    }

    const INTERNAL_SETTINGS: InternalSettingStructure = {
        [Settings.VERSION]: {
            default: '2.1.8',
            export: '0x0',
            transform: InternalStructureTransform.NONE,
            validator: validateNotNull
        },
        [Settings.SELECTED_CURRENCY]: {
            default: 'USD',
            export: '0x1',
            transform: InternalStructureTransform.NONE,
            validator: validateNotNull
        },
        [Settings.CUSTOM_CURRENCY_RATE]: {
            default: 1,
            export: '0x2',
            transform: InternalStructureTransform.NONE,
            validator: validateNumber
        },
        [Settings.CUSTOM_CURRENCY_NAME]: {
            default: 'CC',
            export: '0x3',
            transform: InternalStructureTransform.NONE,
            validator: validateNotNull
        },
        [Settings.CAN_EXPAND_SCREENSHOTS]: {
            default: false,
            export: '0x6',
            transform: InternalStructureTransform.BOOLEAN,
            validator: validateBoolean
        },
        [Settings.EXPAND_SCREENSHOTS_BACKDROP]: {
            default: false,
            export: '0x7',
            transform: InternalStructureTransform.BOOLEAN,
            validator: validateBoolean
        },
        [Settings.DIFFERENCE_DOMINATOR]: {
            default: DifferenceDominator.STEAM,
            export: '0x8',
            transform: InternalStructureTransform.NONE,
            validator: validateNumber
        },
        [Settings.APPLY_STEAM_TAX]: {
            default: false,
            export: '0x9',
            transform: InternalStructureTransform.BOOLEAN,
            validator: validateBoolean
        },
        [Settings.APPLY_CURRENCY_TO_DIFFERENCE]: {
            default: false,
            export: '0x10',
            transform: InternalStructureTransform.BOOLEAN,
            validator: validateBoolean
        },
        [Settings.EXPAND_TYPE]: {
            default: ExpandScreenshotType.PREVIEW,
            export: '0x11',
            transform: InternalStructureTransform.NONE,
            validator: validateNumber
        },
        [Settings.CUSTOM_FOP]: {
            default: FOP_VALUES.Auto,
            export: '0x12',
            transform: InternalStructureTransform.NONE,
            validator: validateNumber
        },
        [Settings.DEFAULT_SORT_BY]: {
            default: 'default',
            export: '0x13',
            transform: InternalStructureTransform.NONE,
            validator: validateNotNull
        },
        [Settings.DEFAULT_STICKER_SEARCH]: {
            default: 'All',
            export: '0x14',
            transform: InternalStructureTransform.NONE,
            validator: validateNotNull
        },
        [Settings.STORED_CUSTOM_STICKER_SEARCH]: {
            default: '',
            export: '0x15',
            transform: InternalStructureTransform.NONE,
            validator: validateNotNull
        },
        [Settings.LEECH_CONTRIBUTOR_KEY]: {
            default: '',
            export: '0x16',
            transform: InternalStructureTransform.NONE,
            validator: validateNotNull
        },
        [Settings.SHOW_TOAST_ON_ACTION]: {
            default: false,
            export: '0x17',
            transform: InternalStructureTransform.BOOLEAN,
            validator: validateBoolean
        },
        [Settings.LISTING_OPTIONS]: {
            default: [true, true, true, true, false, false],
            export: '0x18',
            transform: InternalStructureTransform.BOOLEAN_ARRAY,
            validator: validateBooleanArray
        },
        [Settings.SHOW_FLOAT_BAR]: {
            default: true,
            export: '0x19',
            transform: InternalStructureTransform.BOOLEAN,
            validator: validateBoolean
        },
        [Settings.COLOR_LISTINGS]: {
            default: [false, false],
            export: '0x20',
            transform: InternalStructureTransform.BOOLEAN_ARRAY,
            validator: validateBooleanArray
        },
        [Settings.DATA_PROTECTION]: {
            default: true,
            export: '0x21',
            transform: InternalStructureTransform.BOOLEAN,
            validator: validateBoolean
        },
        [Settings.COLOR_SCHEME]: {
            default: ['#121212', '#1f1f1f', '#bfbfbf', '#696969'],
            export: '0x22',
            transform: InternalStructureTransform.NONE,
            validator: validateColorArray
        },
        [Settings.USE_SCHEME]: {
            default: false,
            export: '0x23',
            transform: InternalStructureTransform.BOOLEAN,
            validator: validateBoolean
        },
        [Settings.LOCATION_RELOAD_NEWEST]: {
            default: LOCATION_RELOAD_NEWEST_VALUES.NONE,
            export: '0x24',
            transform: InternalStructureTransform.NONE,
            validator: validateNumber
        },

        [Settings.EXPERIMENTAL_ALLOW_FAVOURITE_BARGAIN]: {
            default: true,
            export: '2x1',
            transform: InternalStructureTransform.NONE,
            validator: null
        },
        [Settings.EXPERIMENTAL_ADJUST_POPULAR]: {
            default: false,
            export: '2x2',
            transform: InternalStructureTransform.NONE,
            validator: null
        },
        [Settings.EXPERIMENTAL_FETCH_NOTIFICATION]: {
            default: false,
            export: '2x3',
            transform: InternalStructureTransform.NONE,
            validator: null
        },
        [Settings.EXPERIMENTAL_FETCH_FAVOURITE_BARGAIN_STATUS]: {
            default: false,
            export: '2x4',
            transform: InternalStructureTransform.NONE,
            validator: null
        },
        [Settings.EXPERIMENTAL_FETCH_ITEM_PRICE_HISTORY]: {
            default: PriceHistoryRange.OFF,
            export: '2x5',
            transform: InternalStructureTransform.NONE,
            validator: null
        },
        [Settings.EXPERIMENTAL_ADJUST_MARKET_CURRENCY]: {
            default: false,
            export: '2x6',
            transform: InternalStructureTransform.BOOLEAN,
            validator: validateBoolean
        },
        [Settings.EXPERIMENTAL_FORMAT_CURRENCY]: {
            default: false,
            export: '2x7',
            transform: InternalStructureTransform.NONE,
            validator: validateBoolean
        },
        [Settings.EXPERIMENTAL_ADJUST_SHOP]: {
            default: true,
            export: '2x8',
            transform: InternalStructureTransform.BOOLEAN,
            validator: validateBoolean
        },
        [Settings.EXPERIMENTAL_ADJUST_SHARE]: {
            default: true,
            export: '2x9',
            transform: InternalStructureTransform.BOOLEAN,
            validator: validateBoolean
        },
        [Settings.EXPERIMENTAL_ALLOW_BULK_BUY]: {
            default: false,
            export: '2x10',
            transform: InternalStructureTransform.BOOLEAN,
            validator: validateBoolean
        },
        [Settings.EXPERIMENTAL_SHOW_LISTING_DATE]: {
            default: false,
            export: '2x11',
            transform: InternalStructureTransform.BOOLEAN,
            validator: validateBoolean
        },

        [Settings.STORE_DANGER_AGREEMENTS]: {
            default: [false, false],
            export: '3x1',
            transform: InternalStructureTransform.BOOLEAN_ARRAY,
            validator: validateBooleanArray
        }
    };

    // func validators

    function checkTypeValidation(key: Settings, targetType: string): void {
        if (!(typeof INTERNAL_SETTINGS[key].default == targetType)) {
            console.warn(`[BuffUtility] Tried validating ${key} as ${targetType}, should be validated as ${typeof INTERNAL_SETTINGS[key].default}`);
        }
    }

    function validateNotNull(key: Settings, value: any): any {
        if (value == null) {
            return INTERNAL_SETTINGS[key].default;
        } else {
            return value;
        }
    }

    function validateNumber(key: Settings, value: any): number {
        checkTypeValidation(key, 'number');

        if (!isFinite(+value) || +value == null) {
            return <number>INTERNAL_SETTINGS[key].default;
        } else {
            return +value;
        }
    }

    function _validateBoolean(value: any): boolean {
        if (typeof value == 'boolean') {
            return value;
        }

        if (typeof value == 'string') {
            return value == 'true';
        }

        return null;
    }

    function validateBoolean(key: Settings, value: any): boolean {
        checkTypeValidation(key, 'boolean');

        return _validateBoolean(value) ?? <boolean>INTERNAL_SETTINGS[key].default;
    }

    function validateBooleanArray(key: Settings, value: any): boolean[] {
        checkTypeValidation(key, 'object');

        value = value ?? INTERNAL_SETTINGS[key].default;

        let r = [];
        for (let i = 0, l = (<[]>INTERNAL_SETTINGS[key].default)?.length; i < l; i ++) {
            r[i] = _validateBoolean(value[i]) ?? INTERNAL_SETTINGS[key].default[i];
        }

        return r;
    }

    function _validateColor(value: any): string {
        return /#[0-9a-f]{6}/i.test(value) ? value : null;
    }

    function validateColor(key: Settings, value: any): string {
        checkTypeValidation(key, 'string');

        return _validateColor(value) ?? <string>INTERNAL_SETTINGS[key].default;
    }

    function validateColorArray(key: Settings, value: any): string[] {
        value = value ?? INTERNAL_SETTINGS[key].default;

        let r = [];
        for (let i = 0, l = (<[]>INTERNAL_SETTINGS[key].default)?.length; i < l; i ++) {
            r[i] = _validateColor(value[i]) ?? INTERNAL_SETTINGS[key].default[i];
        }

        return r;
    }

    // general

    /**
     * Get the specified setting
     *
     * @param setting The value of the setting to get
     * @returns The value from the specified setting, return type is determined by passed setting
     */
    export async function getSetting<T extends Settings, R extends SettingsTypes[T]>(setting: T): Promise<R> {
        return await new Promise<R>((resolve, _) => {
            let internal: InternalSetting<any> = INTERNAL_SETTINGS[setting];

            // setting doesnt exist
            if (!internal) {
                console.debug(`[BuffUtility] Attempted loading setting ${setting} failed. Setting does not exist.`);
                resolve(null);
                return;
            }

            // if setting has been resolved (loaded) already, return value
            if (internal.resolved) {
                // console.debug(`[BuffUtility] Loading resolved setting ${setting}:`, internal.value);
                resolve(internal.value);
                return;
            }

            BrowserInterface.Storage.get<any>(internal.export).then(value => {
                let newValue = value;
                switch (internal.transform) {
                    case InternalStructureTransform.NONE:
                        break;
                    case InternalStructureTransform.BOOLEAN:
                        newValue = value == 1;

                        // forcefully disable for now until proxy works properly
                        if (setting == Settings.EXPERIMENTAL_FETCH_FAVOURITE_BARGAIN_STATUS || setting == Settings.EXPERIMENTAL_FETCH_ITEM_PRICE_HISTORY) {
                            newValue = false;
                        }

                        break;
                    case InternalStructureTransform.BOOLEAN_ARRAY:
                        newValue = Util.importBooleansFromBytes(value);
                        break;
                }

                let validator = internal.validator ?? ((_, value) => value);
                internal.value = validator(setting, newValue);

                internal.resolved = true;

                DEBUG && console.debug(`[BuffUtility] Resolved setting ${setting}:`, internal.value);

                resolve(internal.value);
            });
        });
    }

    /**
     * Set a new value for the specified setting <br>
     * Value will be checked by the specified setting validator
     *
     * @param setting The specified setting to update
     * @param newValue The new value of the setting
     */
    export function setSetting<T extends Settings, V extends SettingsTypes[T]>(setting: T, newValue: any | V): void {
        if (!(setting in INTERNAL_SETTINGS)) {
            console.debug(`[BuffUtility] Tried setting value for '${setting}', but that setting does not exist.`);
            return;
        }

        let oldValue: any = INTERNAL_SETTINGS[setting].value;

        let validator = INTERNAL_SETTINGS[setting].validator ?? ((_, value) => value);
        INTERNAL_SETTINGS[setting].value = validator(setting, newValue);

        console.debug(`[BuffUtility] Saved setting: ${setting}\n${oldValue} -> ${newValue}`);

        finalize(setting);
    }

    /**
     * Reset the specified setting to the default value
     *
     * @param setting
     */
    export function resetSetting<T extends Settings>(setting: T): void {
        console.debug(`[BuffUtility] Resetting '${setting}' to the default value.`);

        if (DANGER_SETTINGS.indexOf(setting) > -1) {
            setSetting(Settings.STORE_DANGER_AGREEMENTS, [false, false]);
        }

        setSetting(setting, <SettingsTypes[T]>INTERNAL_SETTINGS[setting].default);
    }

    /**
     * This will write the specified settings to the storage
     *
     * @param setting Define the setting to write, for optimization purposes
     */
    export function finalize(setting: Settings): void {
        let internal: InternalSetting<any> = INTERNAL_SETTINGS[setting];

        if (!internal) {
            DEBUG && console.debug(`[BuffUtility] Cannot finalize setting "${setting}", it does not exist.`);
            return;
        }

        let exportValue: any = null;
        switch (internal.transform) {
            case InternalStructureTransform.NONE:
                exportValue = internal.value;
                break;
            case InternalStructureTransform.BOOLEAN:
                exportValue = internal.value == true ? 1 : 0;
                break;
            case InternalStructureTransform.BOOLEAN_ARRAY:
                exportValue = Util.exportBooleansToBytes(<boolean[]>internal.value);
                break;
        }

        BrowserInterface.Storage.set({
            [internal.export]: exportValue
        }).then(_ => DEBUG && console.debug('[BuffUtility] Wrote setting:', setting, `(${internal.export})`, '->', exportValue));
    }

    /**
     * @deprecated
     *
     * @param setting
     */
    export function hasBeenAgreed(setting: Settings): boolean {
        switch (setting) {
            case Settings.EXPERIMENTAL_FETCH_FAVOURITE_BARGAIN_STATUS:
                return getSetting(Settings.STORE_DANGER_AGREEMENTS)[0];
            case Settings.EXPERIMENTAL_FETCH_ITEM_PRICE_HISTORY:
                return getSetting(Settings.STORE_DANGER_AGREEMENTS)[1];
            default:
                return false;
        }
    }

    // --- upgrade ~2.1.7 -> 2.1.8+

    /**
     * @deprecated
     */
    function _load217(): void {
        let tempSettings = Util.tryParseJson(Cookie.read(GlobalConstants.BUFF_UTILITY_SETTINGS));

        if (tempSettings) {
            const defaultKeys = Object.keys(INTERNAL_SETTINGS);

            for (let key of defaultKeys) {
                setSetting(<Settings>key, tempSettings[key]);
            }

            console.debug('[BuffUtility] Finished migrating Settings from ~2.1.6 to 2.1.8+');

            Cookie.write(GlobalConstants.BUFF_UTILITY_SETTINGS, '0', 0);
        }
    }

    // only attempt migration if we are browsing where the cookie once was present
    if (window.location.href.indexOf('buff.163.com') > -1) {
        _load217();
    }

}

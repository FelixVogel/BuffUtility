///<reference path="../Util.ts"/>
///<reference path="../fRequest.ts"/>

/**
 * Provide a interface to the Buff API
 * with automatic retry on 429 whilst avoiding getting constantly limited
 *
 * Copyright 2021 Felix Vogel
 * BuffUtility is not affiliated with buff.163.com or NetEase
 */
/** */
module BuffApi {

    export type InfoTags = {
        [name: string]: {
            'category'?: string,
            'internal_name'?: string,
            'localized_name'?: string
        }
    }

    export type SellOrderInfo = {
        'appid'?: number,
        'description'?: any,
        'game'?: string,
        'goods_id'?: number,
        'icon_url'?: string,
        'item_id'?: string,
        'market_hash_name'?: string,
        'market_min_price'?: string,
        'name'?: string,
        'original_icon_url'?: string,
        'short_name'?: string,
        'steam_price'?: string,
        'steam_price_cny'?: string,
        'steam_price_custom'?: string,
        'tags'?: InfoTags
    }

    export type SellOrderResponse = {
        'code'?: string,
        'data'?: {
            'goods_infos'?: {
                [goods_id: string]: SellOrderInfo
            }
        }
    };

    export type BuyOrderInfo = {
        'allow_tradable_cooldown'?: number,
        'appid'?: number,
        'created_at'?: number,
        'fee'?: string,
        'frozen_amount'?: string,
        'frozen_num'?: number,
        'game'?: string,
        'goods_id'?: number,
        'icon_url'?: string,
        'id'?: string,
        'num'?: number,
        'pay_method'?: number,
        'price'?: string,
        'real_num'?: number,
        'specific'?: any[],
        'state'?: string,
        'state_text'?: string,
        'tradable_cooldown'?: any,
        'updated_at'?: number,
        'user_id'?: string
    }

    export type BuyOrderResponse = {
        'code'?: string,
        'data'?: {
            'items'?: BuyOrderInfo[]
        }
    }

    export type GoodsPageResponse = {
        'code'?: string,
        'data'?: {
            'items'?: GoodsPageItem[],
            'page_num'?: number,
            'page_size'?: number,
            'total_count'?: number,
            'total_page'?: number,
        },
        'msg'?: any
    }

    export type GoodsPageItem = {
        'appid'?: number,
        'bookmarked'?: boolean,
        'buy_max_price'?: string,
        'buy_num'?: number,
        'can_bargain'?: boolean,
        'can_search_by_tournament'?: boolean,
        'description'?: any,
        'game'?: string,
        'goods_info'?: {
            'icon_url'?: string,
            'info'?: {
                'tags'?: InfoTags
            },
            'item_id'?: any,
            'original_icon_url'?: string,
            'steam_price'?: string,
            'steam_price_cny'?: string,
        },
        'has_buff_price_history'?: boolean,
        'id'?: number,
        'market_hash_name'?: string,
        'market_min_price'?: string,
        'name'?: string,
        'quick_price'?: string,
        'sell_min_price'?: string,
        'sell_num'?: number,
        'sell_reference_price'?: string,
        'short_name'?: string,
        'steam_market_url'?: string,
        'transacted_num'?: number,
    }

    export type TopBookmarkedResponse = {
        'code'?: string,
        'data'?: {
            'goods_infos'?: {
                [id: number]: {
                    'appid'?: number,
                    'can_3d_inspect'?: boolean,
                    'can_inspect'?: boolean,
                    'description'?: any,
                    'game'?: string,
                    'goods_id'?: number,
                    'icon_url'?: string,
                    'item_id'?: any,
                    'market_hash_name'?: string,
                    'market_min_price'?: string,
                    'name'?: string,
                    'original_icon_url'?: string,
                    'short_name'?: string,
                    'steam_price'?: string,
                    'steam_price_cny'?: string,
                    'steam_price_custom'?: string,
                    'tags'?: InfoTags
                }
            },
            'items'?: {
                'allow_bargain'?: boolean,
                'appid'?: number,
                'asset_info'?: {
                    'action_link'?: string,
                    'appid'?: number,
                    'assetid'?: string,
                    'classid'?: string,
                    'contextid'?: number,
                    'goods_id'?: number,
                    'has_tradable_cooldown'?: boolean,
                    'info'?: {
                        'fraudwarnings'?: string,
                        'icon_url'?: string,
                        'inspect_en_size'?: string,
                        'inspect_en_url'?: string,
                        'inspect_mobile_size'?: string,
                        'inspect_mobile_url'?: string,
                        'inspect_size'?: string,
                        'inspect_start_at'?: string,
                        'inspect_state'?: number,
                        'inspect_url'?: string,
                        'inspect_version'?: number,
                        'inspected_at'?: string,
                        'metaphysic'?: {
                            'data'?: {
                                'color'?: string,
                                'name'?: string
                            },
                            'title'?: string
                        },
                        'original_icon_url'?: string,
                        'paintindex'?: number,
                        'paintseed'?: number,
                        'phase_data'?: {
                            'color'?: string,
                            'name'?: string
                        }
                        'stickers'?: {
                            'category'?: string,
                            'img_url'?: string,
                            'name'?: string,
                            'slot'?: number,
                            'sticker_id'?: number,
                            'wear'?: number
                        }[],
                        'tier_data'?: {
                            'color'?: string,
                            'name'?: string
                        },
                        'tournament_tags'?: {
                            'category'?: string,
                            'internal_name'?: string,
                            'localized_name'?: string
                        }[]
                    },
                    'instanceid'?: string,
                    'paintwear'?: string,
                    'tradable_cooldown_text'?: string,
                    'tradable_unfrozen_time'?: any
                },
                'can_bargain'?: boolean,
                'cannot_bargain_reason'?: string,
                'created_at'?: number,
                'description'?: string,
                'featured'?: number,
                'fee'?: string,
                'game'?: string,
                'goods_id'?: number,
                'id'?: string,
                'income'?: string,
                'lowest_bargain_price'?: string,
                'mode'?: number,
                'price'?: string,
                'recent_average_duration'?: any,
                'recent_deliver_rate'?: any,
                'state'?: number,
                'tradable_cooldown'?: any,
                'updated_at'?: number,
                'user_id'?: string
            }[],
            'page_num'?: number,
            'page_size'?: number,
            'show_game_cms_icon'?: boolean,
            'total_count'?: number,
            'total_page'?: number,
            // don't need these
            'user_infos'?: {
                [id: string]: any
            }
        },
        'msg'?: any
    }

    export type MarketPageTabs = 'selling'|'goods'|'buying'|'goods/buying'|'top-bookmarked'|'sell_order/top_bookmarked';

    let cachedResponses: {
        [game: string]: {
            [id: string]: {
                sell?: SellOrderInfo,
                sell_timestamp?: number,
                buy?: BuyOrderInfo
                buy_timestamp?: number
            }
        }
    } = {};

    /**
     * Put a response to be cached
     *
     * @param id
     * @param type
     * @param data
     * @private
     */
    function putCachedResponse(id: string, type: 'sell'|'buy', data: SellOrderInfo | BuyOrderInfo): void {
        let game = getSelectedGame();

        if (!cachedResponses[game]) cachedResponses[game] = {};
        if (!cachedResponses[game][id]) cachedResponses[game][id] = {};

        cachedResponses[game][id][type] = data;
        cachedResponses[game][id][`${type}_timestamp`] = Date.now();
    }

    /**
     * Get a cached response
     *
     * @param id
     * @param type
     * @private
     */
    function getCachedResponse(id: string, type: 'sell' | 'buy'): SellOrderInfo | BuyOrderInfo {
        let game = getSelectedGame();

        if (cachedResponses[game] &&
            cachedResponses[game][id] &&
            cachedResponses[game][id][type] &&
            cachedResponses[game][id][`${type}_timestamp`] &&
            cachedResponses[game][id][`${type}_timestamp`] + 5 * 60 * 1_000 > Date.now()
        ) {
            return cachedResponses[game][id][type];
        }

        return null;
    }

    /**
     * Gets the currently selected game for the api call
     */
    export function getSelectedGame(): string {
        return document.getElementById('j_game-switcher').getAttribute('data-current');
    }

    /**
     * Get market sell order information on a item
     *
     * @param id The item id
     * @param callback The successor callback
     * @param onretry The failure callback
     * @param maxRetry The max amount or retries before waiting 4.5 seconds
     */
    export function getSellOrderInformation(id: string, callback: (goodsInfo: SellOrderInfo) => void, onretry: (status: number) => void, maxRetry: number = 5): void {
        let cached = getCachedResponse(id, 'sell');

        if (cached) {
            callback(cached);
            return;
        }

        let url = `https://buff.163.com/api/market/goods/sell_order?game=${getSelectedGame()}&goods_id=${id}`;

        let retryCount = 0;

        function call() {
            if (retryCount > maxRetry) return callback(null);

            fRequest.get(url, [], (req, args, e) => {
                if (req.readyState != 4) return;

                if (req.status != 200) {
                    retryCount ++;

                    onretry(req.status);

                    return setTimeout(() => call(), 2_500);
                }

                let result = <SellOrderResponse>Util.parseJson(req);
                let goodsInfo = <SellOrderInfo>(result.data.goods_infos[id] ?? {});

                putCachedResponse(id, 'sell', goodsInfo);

                callback(goodsInfo);
            });
        }

        call();
    }

    /**
     * Get market buy order information on a item
     *
     * @param id The item id
     * @param callback The successor callback
     * @param onretry The failure callback
     * @param maxRetry The max amount or retries before waiting 4.5 seconds
     */
    export function getBuyOrderInformation(id: string, callback: (json: BuyOrderInfo) => void, onretry: (status: number) => void, maxRetry: number = 5): void {
        let cached = getCachedResponse(id, 'buy');

        if (cached) {
            callback(cached);
            return;
        }

        let url = `https://buff.163.com/api/market/goods/buy_order?game=${getSelectedGame()}&page_num=1&page_size=80&goods_id=${id}`;

        let retryCount = 0;

        function call() {
            if (retryCount > maxRetry) return callback(null);

            fRequest.get(url, [], (req, args, e) => {
                if (req.readyState != 4) return;

                if (req.status != 200) {
                    retryCount ++;

                    onretry(req.status);

                    return setTimeout(() => call(), 2500);
                }

                let result = <BuyOrderResponse>Util.parseJson(req);

                let buyOrderInfo: BuyOrderInfo;

                for (let i = 0, l = result.data.items.length; i < l; i ++) {
                    let it = <BuyOrderInfo>result.data.items[i] ?? {};

                    // ignore specific buy orders
                    if ((it.specific ?? []).length > 0) continue;

                    buyOrderInfo = it;

                    break;
                }

                putCachedResponse(id, 'buy', buyOrderInfo);

                callback(buyOrderInfo);
            });
        }

        call();
    }

    export function getMarketJsonData(callback: (json: GoodsPageResponse | TopBookmarkedResponse) => void): void {
        let query = window.location.href.split('?')[1];
        let tab = getTab();

        // remove page ref cuz it breaks buff queries, fucking what
        query = query.replace(/#tab=(?:selling|buying|top-bookmarked)/, '');

        queryMarket(<MarketPageTabs>tab, query, callback);
    }

    export function queryMarket(tab: MarketPageTabs, query: string, callback: (json: GoodsPageResponse | TopBookmarkedResponse) => void): void {
        if (!tab) {
            return console.error('[BuffApi] No tab specified.');
        }

        switch (tab) {
            case 'selling':
            case 'goods':
                tab = 'goods';
                break;
            case 'buying':
            case 'goods/buying':
                tab = 'goods/buying';
                break;
            case 'top-bookmarked':
            case 'sell_order/top_bookmarked':
                tab = 'sell_order/top_bookmarked';
                break;
            default:
                return console.error('[BuffApi] The specified tab does not match selling, buying or top-bookmarked');
        }

        query = query ?? '';

        fRequest.get(`https://buff.163.com/api/market/${tab}?${query}`, null, (req, args, e) => {
            if (req.readyState != 4) return;

            let response: GoodsPageResponse | TopBookmarkedResponse;
            try {
                response = Util.parseJson(req);
            } catch { }

            console.info(`[BuffUtility] Loaded ${tab}?${query} with ${(response?.data?.items?.length ?? 0)} items.`);

            callback(response);
        });
    }

    export function getTab(url: string = window.location.href): MarketPageTabs {
        return <MarketPageTabs>(/#tab=(selling|buying|top-bookmarked)/.exec(url)[1] ?? 'selling');
    }

}
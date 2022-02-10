declare module BuffTypes {

    /**
     * g type
     */
    /** */
    export interface g {
        appid: number,
        currency: any,
        game: string,
        locale: string,
        user: {
            avatar: string,
            id: string,
            mobile: string,
            nickname: string,
            steamid: number
        },
        webview_title: any
    }

    /**
     * Response type for: <br/>
     * <code>/api/market/goods/sell_order</code>
     */
    /** */
    export module SellOrder {

        export interface TagInfo {
            category: string;
            internal_name: string;
            localized_name: string;
        }

        export interface Tags {
            [name: string]: TagInfo;
        }

        export interface GoodsInfo {
            appid: number;
            description?: any;
            game: string;
            goods_id: number;
            icon_url: string;
            item_id?: any;
            market_hash_name: string;
            market_min_price: string;
            name: string;
            original_icon_url: string;
            short_name: string;
            steam_price: string;
            steam_price_cny: string;
            steam_price_custom: string;
            tags: Tags;
        }

        export interface GoodsInfos {
            [id: number]: GoodsInfo;
        }

        export interface HasMarketStores {
            [name: string]: boolean;
        }

        export interface Sticker {
            category: string;
            img_url: string;
            name: string;
            slot: number;
            sticker_id: number;
            wear: number;
        }

        export interface Info {
            fraudwarnings?: any;
            icon_url: string;
            inspect_en_size: string;
            inspect_en_url: string;
            inspect_mobile_size: string;
            inspect_mobile_url: string;
            inspect_size: string;
            inspect_start_at: string;
            inspect_state: number;
            inspect_trn_size: string;
            inspect_trn_url: string;
            inspect_url: string;
            inspect_version: number;
            inspected_at: string;
            original_icon_url: string;
            paintindex: number;
            paintseed: number;
            stickers: Sticker[];
            tournament_tags: any[];
        }

        export interface AssetInfo {
            action_link: string;
            appid: number;
            assetid: string;
            classid: string;
            contextid: number;
            goods_id: number;
            has_tradable_cooldown: boolean;
            info: Info;
            instanceid: string;
            paintwear: string;
            tradable_cooldown_text: string;
            tradable_unfrozen_time?: any;
        }

        export interface Item {
            allow_bargain: boolean;
            appid: number;
            asset_info: AssetInfo;
            background_image_url: string;
            bookmarked: boolean;
            can_bargain: boolean;
            can_use_inspect_trn_url: boolean;
            cannot_bargain_reason: string;
            coupon_infos?: any;
            created_at: number;
            description: string;
            featured: number;
            fee: string;
            game: string;
            goods_id: number;
            id: string;
            img_src: string;
            income: string;
            lowest_bargain_price: string;
            mode: number;
            price: string;
            recent_average_duration: number;
            recent_deliver_rate: number;
            state: number;
            supported_pay_methods: number[];
            tradable_cooldown?: any;
            updated_at: number;
            user_id: string;
        }

        export interface PreviewScreenshots {
            bg_img: string;
            selling: string;
        }

        export interface UserInfo {
            avatar: string;
            avatar_safe: string;
            is_premium_vip: boolean;
            nickname: string;
            seller_level: number;
            shop_id: string;
            user_id: string;
            v_types?: any;
        }

        export interface UserInfos {
            [name: string]: UserInfo;
        }

        export interface Data {
            fop_str: string;
            goods_infos: GoodsInfos;
            has_market_stores: HasMarketStores;
            items: Item[];
            page_num: number;
            page_size: number;
            preview_screenshots: PreviewScreenshots;
            sort_by: string;
            src_url_background: string;
            total_count: number;
            total_page: number;
            user_infos: UserInfos;
        }

        export interface RootObject {
            code: string;
            data: Data;
            msg?: any;
        }

    }

    /**
     * Response type for: <br/>
     * <code>/api/market/goods/buy_order</code>
     */
    /** */
    export module BuyOrder {

        export interface Item {
            allow_tradable_cooldown: number;
            appid: number;
            created_at: number;
            fee: string;
            frozen_amount: string;
            frozen_num: number;
            game: string;
            goods_id: number;
            icon_url: string;
            id: string;
            num: number;
            pay_method: number;
            price: string;
            real_num: number;
            specific: any[];
            state: string;
            state_text: string;
            tradable_cooldown?: any;
            updated_at: number;
            user_id: string;
        }

        export interface UserInfo {
            avatar: string;
            avatar_safe: string;
            is_premium_vip: boolean;
            nickname: string;
            seller_level: number;
            shop_id: string;
            user_id: string;
            v_types?: any;
        }

        export interface UserInfos {
            [name: string]: UserInfo;
        }

        export interface Data {
            items: Item[];
            page_num: number;
            page_size: number;
            total_count: number;
            total_page: number;
            user_infos: UserInfos;
        }

        export interface RootObject {
            code: string;
            data: Data;
            msg?: any;
        }

    }

    /**
     * Response type for: <br/>
     * <code>/api/market/goods/bill_order</code>
     */
    /** */
    export module BillOrder {

        export interface HasMarketStores {
            [name: string]: boolean;
        }

        export interface Sticker {
            category: string;
            img_url: string;
            name: string;
            slot: number;
            sticker_id: number;
            wear: number;
        }

        export interface TournamentTag {
            category: string;
            internal_name: string;
            localized_name: string;
        }

        export interface Info {
            fraudwarnings?: any;
            icon_url: string;
            inspect_en_size: string;
            inspect_en_url: string;
            inspect_mobile_size: string;
            inspect_mobile_url: string;
            inspect_size: string;
            inspect_start_at: string;
            inspect_state: number;
            inspect_trn_size: string;
            inspect_trn_url: string;
            inspect_url: string;
            inspect_version: number;
            inspected_at: string;
            original_icon_url: string;
            paintindex: number;
            paintseed: number;
            stickers: Sticker[];
            tournament_tags: TournamentTag[];
        }

        export interface AssetInfo {
            action_link: string;
            appid: number;
            assetid: string;
            classid: string;
            contextid: number;
            goods_id: number;
            has_tradable_cooldown: boolean;
            info: Info;
            instanceid: string;
            paintwear: string;
            tradable_cooldown_text: string;
            tradable_unfrozen_time: number;
        }

        export interface BundleInfo { }

        export interface Item {
            appid: number;
            asset_info: AssetInfo;
            bundle_info: BundleInfo;
            buyer_cancel_timeout?: any;
            buyer_cookie_invalid: boolean;
            buyer_id: string;
            buyer_pay_time: number;
            buyer_send_offer_timeout: number;
            can_replace_asset: boolean;
            coupon_info?: any;
            coupon_infos?: any;
            created_at: number;
            deliver_expire_timeout: number;
            error_text?: any;
            fail_confirm?: any;
            fee: string;
            game: string;
            goods_id: number;
            has_bargain: boolean;
            has_sent_offer: boolean;
            id: number;
            income: string;
            is_seller_asked_to_send_offer: boolean;
            mode: number;
            original_price: string;
            pay_expire_timeout: number;
            pay_method: number;
            pay_method_text: string;
            price: string;
            receive_expire_timeout: number;
            recent_average_duration?: any;
            recent_deliver_rate?: any;
            sell_order_id: number;
            seller_can_cancel: boolean;
            seller_cookie_invalid: boolean;
            seller_id: string;
            trade_offer_trace_url?: any;
            trade_offer_url?: any;
            tradeofferid?: any;
            transact_time: number;
            type: number;
            updated_at: number;
        }

        export interface UserInfo {
            avatar: string;
            avatar_safe: string;
            nickname: string;
            shop_id: string;
            user_id: string;
        }

        export interface UserInfos {
            [name: string]: UserInfo;
        }

        export interface Data {
            has_market_stores: HasMarketStores;
            items: Item[];
            page_num: number;
            page_size: number;
            total_count: number;
            total_page: number;
            user_infos: UserInfos;
        }

        export interface RootObject {
            code: string;
            data: Data;
            msg?: any;
        }

    }

    /**
     * Response type for: <br/>
     * <code>/api/market/goods</code>
     * <code>/api/market/buying</code>
     */
    /** */
    export module GoodsOrBuying {

        export interface TagInfo {
            category: string;
            internal_name: string;
            localized_name: string;
        }

        export interface Tags {
            [name: string]: TagInfo;
        }

        export interface Info {
            tags: Tags;
        }

        export interface GoodsInfo {
            icon_url: string;
            info: Info;
            item_id?: any;
            original_icon_url: string;
            steam_price: string;
            steam_price_cny: string;
        }

        export interface Item {
            appid: number;
            bookmarked: boolean;
            buy_max_price: string;
            buy_num: number;
            can_bargain: boolean;
            can_search_by_tournament: boolean;
            description?: any;
            game: string;
            goods_info: GoodsInfo;
            has_buff_price_history: boolean;
            id: number;
            market_hash_name: string;
            market_min_price: string;
            name: string;
            quick_price: string;
            sell_min_price: string;
            sell_num: number;
            sell_reference_price: string;
            short_name: string;
            steam_market_url: string;
            transacted_num: number;
        }

        export interface Data {
            items: Item[];
            page_num: number;
            page_size: number;
            total_count: number;
            total_page: number;
        }

        export interface RootObject {
            code: string;
            data: Data;
            msg?: any;
        }

    }

    /**
     * Response type for: <br/>
     * <code>/api/market/buying</code>
     */
    /*
    export module Buying {

        export interface TagInfo {
            category: string;
            internal_name: string;
            localized_name: string;
        }

        export interface Tags {
            [name: string]: TagInfo;
        }

        export interface Info {
            tags: Tags;
        }

        export interface GoodsInfo {
            icon_url: string;
            info: Info;
            item_id?: any;
            original_icon_url: string;
            steam_price: string;
            steam_price_cny: string;
        }

        export interface Item {
            appid: number;
            bookmarked: boolean;
            buy_max_price: string;
            buy_num: number;
            can_bargain: boolean;
            can_search_by_tournament: boolean;
            description?: any;
            game: string;
            goods_info: GoodsInfo;
            has_buff_price_history: boolean;
            id: number;
            market_hash_name: string;
            market_min_price: string;
            name: string;
            quick_price: string;
            sell_min_price: string;
            sell_num: number;
            sell_reference_price: string;
            short_name: string;
            steam_market_url: string;
            transacted_num: number;
        }

        export interface Data {
            items: Item[];
            page_num: number;
            page_size: number;
            total_count: number;
            total_page: number;
        }

        export interface RootObject {
            code: string;
            data: Data;
            msg?: any;
        }

    }*/

    /**
     * Response type for: <br/>
     * <code>/api/market/top_bookmarked</code>
     */
    /** */
    export module TopBookmarked {

        export interface TagInfo {
            category: string;
            internal_name: string;
            localized_name: string;
        }

        export interface Tags {
            [name: string]: TagInfo;
        }

        export interface GoodsInfo {
            appid: number;
            can_3d_inspect: boolean;
            can_inspect: boolean;
            description?: any;
            game: string;
            goods_id: number;
            icon_url: string;
            item_id?: any;
            market_hash_name: string;
            market_min_price: string;
            name: string;
            original_icon_url: string;
            short_name: string;
            steam_price: string;
            steam_price_cny: string;
            steam_price_custom: string;
            tags: Tags;
        }

        export interface GoodsInfos {
            [id: number]: GoodsInfo
        }

        export interface Sticker {
            category: string;
            img_url: string;
            name: string;
            slot: number;
            sticker_id: number;
            wear: number;
        }

        export interface TournamentTag {
            category: string;
            internal_name: string;
            localized_name: string;
        }

        export interface MetaphysicData {
            color: string;
            name: string;
        }

        export interface Metaphysic {
            data: MetaphysicData;
            title: string;
        }

        export interface PhaseData {
            color: string;
            name: string;
        }

        export interface Info {
            fraudwarnings: string;
            icon_url: string;
            inspect_en_size: string;
            inspect_en_url: string;
            inspect_mobile_size: string;
            inspect_mobile_url: string;
            inspect_size: string;
            inspect_start_at: string;
            inspect_state: number;
            inspect_trn_size: string;
            inspect_trn_url: string;
            inspect_url: string;
            inspect_version: number;
            inspected_at: string;
            original_icon_url: string;
            paintindex: number;
            paintseed: number;
            stickers: Sticker[];
            tournament_tags: TournamentTag[];
            metaphysic: Metaphysic;
            phase_data: PhaseData;
        }

        export interface AssetInfo {
            action_link: string;
            appid: number;
            assetid: string;
            classid: string;
            contextid: number;
            goods_id: number;
            has_tradable_cooldown: boolean;
            info: Info;
            instanceid: string;
            paintwear: string;
            tradable_cooldown_text: string;
            tradable_unfrozen_time?: any;
        }

        export interface CouponInfo {
            cdkey_id: string;
            cdkey_text: string;
            coupon_type: string;
        }

        export interface Item {
            allow_bargain: boolean;
            appid: number;
            asset_info: AssetInfo;
            can_bargain: boolean;
            cannot_bargain_reason: string;
            coupon_infos: CouponInfo[];
            created_at: number;
            description: string;
            featured: number;
            fee: string;
            game: string;
            goods_id: number;
            id: string;
            income: string;
            lowest_bargain_price: string;
            mode: number;
            price: string;
            recent_average_duration?: any;
            recent_deliver_rate?: any;
            state: number;
            tradable_cooldown?: any;
            updated_at: number;
            user_id: string;
        }

        export interface UserInfo {
            avatar: string;
            avatar_safe: string;
            is_premium_vip: boolean;
            nickname: string;
            seller_level: number;
            shop_id: string;
            user_id: string;
            v_types?: any;
        }

        export interface UserInfos {
            [name: string]: UserInfo;
        }

        export interface Data {
            goods_infos: GoodsInfos;
            items: Item[];
            page_num: number;
            page_size: number;
            show_game_cms_icon: boolean;
            total_count: number;
            total_page: number;
            user_infos: UserInfos;
        }

        export interface RootObject {
            code: string;
            data: Data;
            msg?: any;
        }

    }

    /**
     * Response type for: <br/>
     * <code>/api/index/popular_sell_order</code>
     */
    /** */
    export module PopularSellOrder {

        export interface TagInfo {
            category: string;
            internal_name: string;
            localized_name: string;
        }

        export interface Tags {
            [name: string]: TagInfo;
        }

        export interface GoodsInfo {
            appid: number;
            can_3d_inspect: boolean;
            can_inspect: boolean;
            description?: any;
            game: string;
            goods_id: number;
            icon_url: string;
            item_id?: any;
            market_hash_name: string;
            market_min_price: string;
            name: string;
            original_icon_url: string;
            short_name: string;
            steam_price: string;
            steam_price_cny: string;
            steam_price_custom: string;
            tags: Tags;
        }

        export interface GoodsInfos {
            [id: number]: GoodsInfo;
        }

        export interface Sticker {
            category: string;
            img_url: string;
            name: string;
            slot: number;
            sticker_id: number;
            wear: number;
        }

        export interface TournamentTag {
            category: string;
            internal_name: string;
            localized_name: string;
        }

        export interface Data2 {
            color: string;
            name: string;
        }

        export interface Metaphysic {
            data: Data2;
            title: string;
        }

        export interface TierData {
            color: string;
            name: string;
        }

        export interface PhaseData {
            color: string;
            name: string;
        }

        export interface Info {
            fraudwarnings: string;
            icon_url: string;
            inspect_en_size: string;
            inspect_en_url: string;
            inspect_mobile_size: string;
            inspect_mobile_url: string;
            inspect_size: string;
            inspect_start_at: string;
            inspect_state: number;
            inspect_trn_size: string;
            inspect_trn_url: string;
            inspect_url: string;
            inspect_version: number;
            inspected_at: string;
            original_icon_url: string;
            paintindex: number;
            paintseed: number;
            stickers: Sticker[];
            tournament_tags: TournamentTag[];
            metaphysic: Metaphysic;
            tier_data: TierData;
            phase_data: PhaseData;
        }

        export interface AssetInfo {
            action_link: string;
            appid: number;
            assetid: string;
            classid: string;
            contextid: number;
            goods_id: number;
            has_tradable_cooldown: boolean;
            info: Info;
            instanceid: string;
            paintwear: string;
            tradable_cooldown_text: string;
            tradable_unfrozen_time?: any;
        }

        export interface CouponInfo {
            cdkey_id: string;
            cdkey_text: string;
            coupon_type: string;
        }

        export interface Item {
            allow_bargain: boolean;
            appid: number;
            asset_info: AssetInfo;
            coupon_infos: CouponInfo[];
            created_at: number;
            description: string;
            featured: number;
            fee: string;
            game: string;
            goods_id: number;
            id: string;
            income: string;
            lowest_bargain_price: string;
            mode: number;
            price: string;
            recent_average_duration?: any;
            recent_deliver_rate?: any;
            state: number;
            tradable_cooldown?: any;
            updated_at: number;
            user_id: string;
        }

        export interface UserInfo {
            avatar: string;
            avatar_safe: string;
            is_premium_vip: boolean;
            nickname: string;
            seller_level: number;
            shop_id: string;
            user_id: string;
            v_types: string[];
        }

        export interface UserInfos {
            [name: string]: UserInfo;
        }

        export interface Data {
            goods_infos: GoodsInfos;
            items: Item[];
            show_game_cms_icon: boolean;
            user_infos: UserInfos;
        }

        export interface RootObject {
            code: string;
            data: Data;
            msg?: any;
        }

    }

    /**
     * Response type for: <br/>
     * <code>/api/market/steam_inventory</code>
     */
    /** */
    export module SteamInventory {

        export interface TagInfo {
            category: string;
            internal_name: string;
            localized_name: string;
        }

        export interface Tags {
            [name: string]: TagInfo;
        }

        export interface GoodsInfo {
            appid: number;
            can_3d_inspect: boolean;
            can_inspect: boolean;
            description?: any;
            game: string;
            goods_id: number;
            icon_url: string;
            item_id?: any;
            market_hash_name: string;
            market_min_price: string;
            name: string;
            original_icon_url: string;
            short_name: string;
            steam_price: string;
            steam_price_cny: string;
            steam_price_custom: string;
            tags: Tags;
        }

        export interface GoodsInfos {
            [id: number]: GoodsInfo;
        }

        export interface AssetExtra {
            buy_price?: any;
            remark: string;
        }

        export interface Sticker {
            category: string;
            img_url: string;
            name: string;
            slot: number;
            sticker_id: number;
            wear: number;
        }

        export interface TournamentTag {
            category: string;
            internal_name: string;
            localized_name: string;
        }

        export interface MetaphysicData {
            color: string;
            name: string;
        }

        export interface Metaphysic {
            data: MetaphysicData;
            title: string;
        }

        export interface TierData {
            color: string;
            name: string;
        }

        export interface Info {
            fraudwarnings: string;
            icon_url: string;
            original_icon_url: string;
            stickers: Sticker[];
            tournament_tags: TournamentTag[];
            paintindex?: number;
            paintseed?: number;
            inspect_en_size: string;
            inspect_en_url: string;
            inspect_mobile_size: string;
            inspect_mobile_url: string;
            inspect_size: string;
            inspect_start_at: string;
            inspect_state?: number;
            inspect_trn_size: string;
            inspect_trn_url: string;
            inspect_url: string;
            inspect_version?: number;
            inspected_at: string;
            metaphysic: Metaphysic;
            tier_data: TierData;
        }

        export interface AssetInfo {
            action_link: string;
            appid: number;
            assetid: string;
            classid: string;
            contextid: number;
            goods_id: number;
            info: Info;
            instanceid: string;
            paintwear: string;
            market_hash_name: string;
        }

        export interface Item {
            action_link: string;
            amount: number;
            appid: number;
            asset_extra: AssetExtra;
            asset_info: AssetInfo;
            assetid: string;
            classid: string;
            contextid: number;
            deposit_index?: any;
            equipped: boolean;
            fraudwarnings: string;
            game: string;
            goods_id: number;
            icon_url: string;
            instanceid: string;
            item_id?: any;
            market_hash_name: string;
            market_min_price: string;
            name: string;
            original_icon_url: string;
            progress?: number;
            progress_text: string;
            punish_end_time?: any;
            sell_min_price: string;
            sell_order_id?: any;
            sell_order_income: string;
            sell_order_price: string;
            short_name: string;
            state: number;
            state_text: string;
            state_toast: string;
            steam_price: string;
            steam_price_custom: string;
            tags: Tags;
            tradable: boolean;
            tradable_text: string;
            tradable_time?: number;
        }

        export interface ProgressDesc {
            [id: number]: string
        }

        export interface StateDesc {
            [id: number]: string
        }

        export interface Data {
            brief_info: string;
            currency: string;
            currency_symbol: string;
            depositable: boolean;
            goods_infos: GoodsInfos;
            inventory_price: string;
            items: Item[];
            manual_plus_sellable: boolean;
            manual_sellable: boolean;
            page_num: number;
            page_size: number;
            progress_desc: ProgressDesc;
            state_desc: StateDesc;
            total_amount: string;
            total_amount_usd: string;
            total_count: number;
            total_page: number;
        }

        export interface RootObject {
            code: string;
            data: Data;
            msg?: any;
        }

    }

    /**
     * Response type for: <br/>
     * <code>/api/market/backpack</code>
     */
    /** */
    export module Backpack {

        export interface GoodsInfos { }

        export interface StateDesc {
            [id: number]: string;
        }

        export interface Data {
            backpack_count: number;
            backpack_limit: number;
            brief_info: string;
            currency: string;
            currency_symbol: string;
            goods_infos: GoodsInfos;
            items: any[];
            page_num: number;
            page_size: number;
            state_desc: StateDesc;
            total_count: number;
            total_page: number;
        }

        export interface RootObject {
            code: string;
            data: Data;
            msg?: any;
        }

    }

}

// global buff.163 Functions

declare function market(): unknown;

declare function buff_utility_query(): unknown;

declare function sendRequest(url: string, config: {
    method: string,
    dataType: string,
    showLoading: boolean,
    success: (data: any) => void
}): unknown;

interface JQueryEx<T> extends JQuery<T> {
    showLoading(): void;
}

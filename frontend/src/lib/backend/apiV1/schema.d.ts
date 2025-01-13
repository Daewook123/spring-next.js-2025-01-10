/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/api/v1/posts/{postId}/comments/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** 수정 */
        put: operations["modify"];
        post?: never;
        /** 삭제 */
        delete: operations["delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/posts/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * 단건 조회
         * @description 비밀글은 작성자만 조회 가능
         */
        get: operations["item"];
        /** 수정 */
        put: operations["modify_1"];
        post?: never;
        /**
         * 삭제
         * @description 작성자 본인 뿐 아니라 관리자도 삭제 가능
         */
        delete: operations["delete_1"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/posts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** 공개글 다건 조회 */
        get: operations["items"];
        put?: never;
        /** 작성 */
        post: operations["write"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/posts/{postId}/comments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** 다건조회 */
        get: operations["items_1"];
        put?: never;
        /** 작성 */
        post: operations["write_1"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/members/login": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * 로그인
         * @description apiKey, accessToken을 발급합니다. 해당 토큰들은 쿠키(HTTP-ONLY)로도 전달됩니다.
         */
        post: operations["login"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/members/join": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** 회원가입 */
        post: operations["join"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/posts/statistics": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** 통계정보 */
        get: operations["statistics"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/posts/mine": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** 내글 다건 조회 */
        get: operations["mine"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/members/me": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** 내 정보 */
        get: operations["me"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/members/logout": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * 로그아웃
         * @description apiKey, accessToken 토큰을 제거합니다.
         */
        delete: operations["logout"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        PostCommentModifyReqBody: {
            content: string;
        };
        PostCommentDto: {
            /** Format: int64 */
            id?: number;
            /** Format: date-time */
            createDate?: string;
            /** Format: date-time */
            modifyDate?: string;
            /** Format: int64 */
            postId?: number;
            /** Format: int64 */
            authorId?: number;
            authorName?: string;
            content?: string;
        };
        RsDataPostCommentDto: {
            resultCode?: string;
            msg?: string;
            data?: components["schemas"]["PostCommentDto"];
        };
        PostModifyReqBody: {
            title: string;
            content: string;
            published?: boolean;
            listed?: boolean;
        };
        PostWithContentDto: {
            /** Format: int64 */
            id?: number;
            /** Format: date-time */
            createDate?: string;
            /** Format: date-time */
            modifyDate?: string;
            /** Format: int64 */
            authorId?: number;
            authorName?: string;
            title?: string;
            content?: string;
            published?: boolean;
            listed?: boolean;
        };
        RsDataPostWithContentDto: {
            resultCode?: string;
            msg?: string;
            data?: components["schemas"]["PostWithContentDto"];
        };
        PostWriteReqBody: {
            title: string;
            content: string;
            published?: boolean;
            listed?: boolean;
        };
        PostCommentWriteReqBody: {
            content: string;
        };
        MemberLoginReqBody: {
            username: string;
            password: string;
        };
        MemberDto: {
            /** Format: int64 */
            id?: number;
            /** Format: date-time */
            createDate?: string;
            /** Format: date-time */
            modifyDate?: string;
            nickname?: string;
        };
        MemberLoginResBody: {
            item?: components["schemas"]["MemberDto"];
            apiKey?: string;
            accessToken?: string;
        };
        RsDataMemberLoginResBody: {
            resultCode?: string;
            msg?: string;
            data?: components["schemas"]["MemberLoginResBody"];
        };
        MemberJoinReqBody: {
            username: string;
            password: string;
            nickname: string;
        };
        RsDataMemberDto: {
            resultCode?: string;
            msg?: string;
            data?: components["schemas"]["MemberDto"];
        };
        PageDtoPostDto: {
            /** Format: int32 */
            currentPageNumber: number;
            /** Format: int32 */
            pageSize: number;
            /** Format: int64 */
            totalPages: number;
            /** Format: int64 */
            totalItems: number;
            items: components["schemas"]["PostDto"][];
        };
        PostDto: {
            /** Format: int64 */
            id: number;
            /** Format: date-time */
            createDate: string;
            /** Format: date-time */
            modifyDate: string;
            /** Format: int64 */
            authorId: number;
            authorName: string;
            title: string;
            published: boolean;
            listed: boolean;
        };
        PostStatisticsResBody: {
            /** Format: int64 */
            totalPostCount?: number;
            /** Format: int64 */
            totalPublishedPostCount?: number;
            /** Format: int64 */
            totalListedPostCount?: number;
        };
        RsDataVoid: {
            resultCode?: string;
            msg?: string;
            data?: Record<string, never>;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    modify: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                postId: number;
                id: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PostCommentModifyReqBody"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["RsDataPostCommentDto"];
                };
            };
        };
    };
    delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                postId: number;
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["RsDataVoid"];
                };
            };
        };
    };
    item: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["PostWithContentDto"];
                };
            };
        };
    };
    modify_1: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PostModifyReqBody"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["RsDataPostWithContentDto"];
                };
            };
        };
    };
    delete_1: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["RsDataVoid"];
                };
            };
        };
    };
    items: {
        parameters: {
            query?: {
                searchKeywordType?: "title" | "content";
                searchKeyword?: string;
                page?: number;
                pageSize?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["PageDtoPostDto"];
                };
            };
        };
    };
    write: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PostWriteReqBody"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["RsDataPostWithContentDto"];
                };
            };
        };
    };
    items_1: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                postId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["PostCommentDto"][];
                };
            };
        };
    };
    write_1: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                postId: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PostCommentWriteReqBody"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["RsDataPostCommentDto"];
                };
            };
        };
    };
    login: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["MemberLoginReqBody"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["RsDataMemberLoginResBody"];
                };
            };
        };
    };
    join: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["MemberJoinReqBody"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["RsDataMemberDto"];
                };
            };
        };
    };
    statistics: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["PostStatisticsResBody"];
                };
            };
        };
    };
    mine: {
        parameters: {
            query?: {
                searchKeywordType?: "title" | "content";
                searchKeyword?: string;
                page?: number;
                pageSize?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["PageDtoPostDto"];
                };
            };
        };
    };
    me: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["MemberDto"];
                };
            };
        };
    };
    logout: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["RsDataVoid"];
                };
            };
        };
    };
}

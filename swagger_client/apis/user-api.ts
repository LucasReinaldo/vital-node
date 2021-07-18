/* tslint:disable */
/* eslint-disable */
/**
 * Vital
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { ClientFacingUser } from '../models';
import { HTTPValidationError } from '../models';
import { Providers } from '../models';
import { UserCreate } from '../models';
import { UserKeyResponse } from '../models';
import { UserSuccessResponse } from '../models';
/**
 * UserApi - axios parameter creator
 * @export
 */
export const UserApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * POST Create user user key associated with client_user_id.
         * @summary Create User
         * @param {UserCreate} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createUser: async (body: UserCreate, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling createUser.');
            }
            const localVarPath = `/v1/user/key`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete User
         * @param {string} userKey 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteUser: async (userKey: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'userKey' is not null or undefined
            if (userKey === null || userKey === undefined) {
                throw new RequiredError('userKey','Required parameter userKey was null or undefined when calling deleteUser.');
            }
            const localVarPath = `/v1/user/{user_key}`
                .replace(`{${"user_key"}}`, encodeURIComponent(String(userKey)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deregister Provider
         * @param {string} userKey 
         * @param {Providers} provider 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deregisterProvider: async (userKey: string, provider: Providers, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'userKey' is not null or undefined
            if (userKey === null || userKey === undefined) {
                throw new RequiredError('userKey','Required parameter userKey was null or undefined when calling deregisterProvider.');
            }
            // verify required parameter 'provider' is not null or undefined
            if (provider === null || provider === undefined) {
                throw new RequiredError('provider','Required parameter provider was null or undefined when calling deregisterProvider.');
            }
            const localVarPath = `/v1/user/{user_key}/{provider}`
                .replace(`{${"user_key"}}`, encodeURIComponent(String(userKey)))
                .replace(`{${"provider"}}`, encodeURIComponent(String(provider)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * GET Users connected providers
         * @summary Get Connected Providers
         * @param {string} userKey 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConnectedProviders: async (userKey: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'userKey' is not null or undefined
            if (userKey === null || userKey === undefined) {
                throw new RequiredError('userKey','Required parameter userKey was null or undefined when calling getConnectedProviders.');
            }
            const localVarPath = `/v1/user/providers/{user_key}`
                .replace(`{${"user_key"}}`, encodeURIComponent(String(userKey)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * GET All users for team.
         * @summary Get Teams Users
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTeamsUsers: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/user/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * GET User details given the user_key.
         * @summary Get User
         * @param {string} userKey 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUser: async (userKey: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'userKey' is not null or undefined
            if (userKey === null || userKey === undefined) {
                throw new RequiredError('userKey','Required parameter userKey was null or undefined when calling getUser.');
            }
            const localVarPath = `/v1/user/{user_key}`
                .replace(`{${"user_key"}}`, encodeURIComponent(String(userKey)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UserApi - functional programming interface
 * @export
 */
export const UserApiFp = function(configuration?: Configuration) {
    return {
        /**
         * POST Create user user key associated with client_user_id.
         * @summary Create User
         * @param {UserCreate} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createUser(body: UserCreate, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserKeyResponse>> {
            const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).createUser(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Delete User
         * @param {string} userKey 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteUser(userKey: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserSuccessResponse>> {
            const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).deleteUser(userKey, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Deregister Provider
         * @param {string} userKey 
         * @param {Providers} provider 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deregisterProvider(userKey: string, provider: Providers, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserSuccessResponse>> {
            const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).deregisterProvider(userKey, provider, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * GET Users connected providers
         * @summary Get Connected Providers
         * @param {string} userKey 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        // @ts-ignore
        async getConnectedProviders(userKey: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<{ [key, string]: Array<SourceClientFacing>;}>> {
            const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).getConnectedProviders(userKey, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * GET All users for team.
         * @summary Get Teams Users
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTeamsUsers(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ClientFacingUser>>> {
            const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).getTeamsUsers(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * GET User details given the user_key.
         * @summary Get User
         * @param {string} userKey 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUser(userKey: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ClientFacingUser>> {
            const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).getUser(userKey, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * UserApi - factory interface
 * @export
 */
export const UserApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * POST Create user user key associated with client_user_id.
         * @summary Create User
         * @param {UserCreate} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createUser(body: UserCreate, options?: any): AxiosPromise<UserKeyResponse> {
            return UserApiFp(configuration).createUser(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete User
         * @param {string} userKey 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteUser(userKey: string, options?: any): AxiosPromise<UserSuccessResponse> {
            return UserApiFp(configuration).deleteUser(userKey, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Deregister Provider
         * @param {string} userKey 
         * @param {Providers} provider 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deregisterProvider(userKey: string, provider: Providers, options?: any): AxiosPromise<UserSuccessResponse> {
            return UserApiFp(configuration).deregisterProvider(userKey, provider, options).then((request) => request(axios, basePath));
        },
        /**
         * GET Users connected providers
         * @summary Get Connected Providers
         * @param {string} userKey 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */        // @ts-ignore
        getConnectedProviders(userKey: string, options?: any): AxiosPromise<{ [key, string]: Array<SourceClientFacing>;}> {
            return UserApiFp(configuration).getConnectedProviders(userKey, options).then((request) => request(axios, basePath));
        },
        /**
         * GET All users for team.
         * @summary Get Teams Users
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTeamsUsers(options?: any): AxiosPromise<Array<ClientFacingUser>> {
            return UserApiFp(configuration).getTeamsUsers(options).then((request) => request(axios, basePath));
        },
        /**
         * GET User details given the user_key.
         * @summary Get User
         * @param {string} userKey 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUser(userKey: string, options?: any): AxiosPromise<ClientFacingUser> {
            return UserApiFp(configuration).getUser(userKey, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserApi - object-oriented interface
 * @export
 * @class UserApi
 * @extends {BaseAPI}
 */
export class UserApi extends BaseAPI {
    /**
     * POST Create user user key associated with client_user_id.
     * @summary Create User
     * @param {UserCreate} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public createUser(body: UserCreate, options?: any) {
        return UserApiFp(this.configuration).createUser(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Delete User
     * @param {string} userKey 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public deleteUser(userKey: string, options?: any) {
        return UserApiFp(this.configuration).deleteUser(userKey, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Deregister Provider
     * @param {string} userKey 
     * @param {Providers} provider 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public deregisterProvider(userKey: string, provider: Providers, options?: any) {
        return UserApiFp(this.configuration).deregisterProvider(userKey, provider, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * GET Users connected providers
     * @summary Get Connected Providers
     * @param {string} userKey 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public getConnectedProviders(userKey: string, options?: any) {
        return UserApiFp(this.configuration).getConnectedProviders(userKey, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * GET All users for team.
     * @summary Get Teams Users
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public getTeamsUsers(options?: any) {
        return UserApiFp(this.configuration).getTeamsUsers(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * GET User details given the user_key.
     * @summary Get User
     * @param {string} userKey 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public getUser(userKey: string, options?: any) {
        return UserApiFp(this.configuration).getUser(userKey, options).then((request) => request(this.axios, this.basePath));
    }
}

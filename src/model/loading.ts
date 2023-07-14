export interface LoadingState<T> {
    data: T
    status: LoadingStateType
}

export enum LoadingStateType {
    INITIAL,
    IDLE,
    LOADING,
    SUCCESS,
    FAILED,
}

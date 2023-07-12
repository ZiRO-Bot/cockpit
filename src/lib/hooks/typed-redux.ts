import { AppDispatch, RootState } from "@/data/store"
import {
    TypedUseSelectorHook,
    useDispatch as _useDispatch,
    useSelector as _useSelector,
} from "react-redux"

export const useDispatch: () => AppDispatch = _useDispatch
export const useSelector: TypedUseSelectorHook<RootState> = _useSelector

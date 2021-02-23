interface ErrorOutput<T> {
    error?: T;
}

interface DataOutput<T> {
    data?: T;
}

export type JSONOutput<T> = ErrorOutput<T> | DataOutput<T>;

// eslint-disable-next-line
export function error<T>(value: T): JSONOutput<T> {
    return {
        error: value,
    };
}

// eslint-disable-next-line
export function data<T>(value: T): JSONOutput<T> {
    return {
        data: value,
    };
}

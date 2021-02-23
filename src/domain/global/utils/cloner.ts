export function without<T>(input: T, ...attributes: string[]): T {
    const object = { ...input };
    attributes.forEach((attribute: string) => {
        delete object[attribute];
    });
    return object;
}

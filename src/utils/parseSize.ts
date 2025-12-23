export function parseSize(value?: string): number {
    if (!value) return 0;
    if (value.endsWith('px')) {
        return parseFloat(value);
    }
    // futuro: %, rem, calc, etc.
    // por enquanto, px é suficiente para resize
    return 0;
}

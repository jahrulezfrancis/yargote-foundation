export default function splitIntoParagraphs(text: string, sentencesPerParagraph = 3): string[] {
    if (!text) return [];

    return text
        .split(/(?<=[.?!])\s+(?=[A-Z])/)
        .reduce((acc: string[], sentence, index) => {
            if (index % sentencesPerParagraph === 0) acc.push(sentence);
            else acc[acc.length - 1] += " " + sentence;
            return acc;
        }, [])
        .map((p) => p.trim());
}

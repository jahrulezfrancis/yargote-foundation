export default function scrollToSection(className: string) {
    const section = document.querySelector(`.${className}`);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
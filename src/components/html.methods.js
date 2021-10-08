class HtmlHelper {
    get tags() {
        return {
            a: 'a',
            h1: 'h1',
            input: 'input',
            span: 'span',
            div: 'div',
            li: 'li',
            option: 'option',
        }
    }

    get attributes() {
        return {
            href: 'href',
            value: 'value',
        }
    }
}
module.exports = new HtmlHelper();
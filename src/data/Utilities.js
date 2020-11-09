export default class Utilities {

    static validateVatNr(string) {
        return string.match(/SE\d{10}/) ? true : false;
    }
}
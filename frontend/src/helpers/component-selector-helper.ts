export const componentSelectorHelper = (name: string) => {
    const res = {
        selector: `app-${name}`,
        templateUrl: `./${name}.component.html`,
        styleUrls: [`./${name}.component.scss`]
    }

    console.log(res)

    return res;
}
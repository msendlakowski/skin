export default { title: 'Menu/Multi Select' };

export const selected = () => `
<span class="menu">
    <div class="menu__items" role="menu">
        <div class="menu__item" role="menuitemcheckbox" aria-checked="true" tabindex="0">
            <span>Item 1</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-tick-small"></use>
            </svg>
        </div>
        <div class="menu__item" role="menuitemcheckbox" aria-checked="true">
            <span>Item 2</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-tick-small"></use>
            </svg>
        </div>
        <div class="menu__item" role="menuitemcheckbox" aria-checked="true">
            <span>Item 3</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-tick-small"></use>
            </svg>
        </div>
    </div>
</span>
`;

export const disabled = () => `
<span class="menu">
    <div class="menu__items" role="menu">
        <div class="menu__item" role="menuitemcheckbox" aria-checked="true" aria-disabled="true" tabindex="0">
            <span>Item 1</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-tick-small"></use>
            </svg>
        </div>
        <div class="menu__item" role="menuitemcheckbox" aria-checked="true">
            <span>Item 2</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-tick-small"></use>
            </svg>
        </div>
        <div class="menu__item" role="menuitemcheckbox" aria-checked="true">
            <span>Item 3</span>
            <svg class="icon icon--tick-small" focusable="false" height="8" width="8" aria-hidden="true">
                <use xlink:href="#icon-tick-small"></use>
            </svg>
        </div>
    </div>
</span>
`;

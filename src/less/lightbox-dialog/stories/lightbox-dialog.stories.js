export default { title: 'Lightbox Dialog/Lightbox Dialog' };

export const lightbox = () => `
<div aria-labelledby="lightbox-dialog-title" aria-modal="true" class="lightbox-dialog" role="dialog">
    <div class="lightbox-dialog__window">
        <div class="lightbox-dialog__header">
            <h2 id="lightbox-dialog-title">Dialog Lightbox</h2>
            <button class="icon-btn lightbox-dialog__close" type="button" aria-label="Close Dialog">
                <svg class="icon icon--close" aria-hidden="true">
                    <use xlink:href="#icon-close"></use>
                </svg>
            </button>
        </div>
        <div class="lightbox-dialog__main">
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        </div>
    </div>
</div>
`;

export const RTL = () => `
<div dir="rtl">
    <div aria-labelledby="lightbox-dialog-title" aria-modal="true" class="lightbox-dialog" role="dialog">
        <div class="lightbox-dialog__window">
            <div class="lightbox-dialog__header">
                <h2 id="lightbox-dialog-title">Dialog Lightbox</h2>
                <button class="icon-btn lightbox-dialog__close" type="button" aria-label="Close Dialog">
                    <svg class="icon icon--close" aria-hidden="true">
                        <use xlink:href="#icon-close"></use>
                    </svg>
                </button>
            </div>
            <div class="lightbox-dialog__main">
                <h3>Heading</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
                <p><a href="http://www.ebay.com">www.ebay.com</a></p>
                <h3>Heading</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
                <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            </div>
        </div>
    </div>
</div>
`;

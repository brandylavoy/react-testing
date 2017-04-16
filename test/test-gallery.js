import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Gallery from '../js/components/gallery';

describe('Gallery component', function() {
    it('Renders the gallery with the correct class name and image props',  function() {
        const url = "http://www.example.com/image.png";
        const description = "Example description";
        const images = [
            {
                url: url,
                description: description
            },
            {
                url: url,
                description: description
            },
            {
                url: url,
                description: description
            }
        ];
        const renderer = TestUtils.createRenderer();
        renderer.render(<Gallery images={images} description={description} />
                       );
                        const result = renderer.getRenderOutput();
        result.props.className.should.equal('gallery');
        result.props.children.length.should.equal(3);
        result.props.children.forEach(img => {
            img.props.url.should.equal(url);
//            img.props.description.should.equal(description);
        });
    });
});

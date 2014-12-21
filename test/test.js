'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	merge = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'sort-merge-asc', function tests() {

	it( 'should export a function', function test() {
		expect( merge ).to.be.a( 'function' );
	});

	it( 'should throw an error if provided a non-array', function test() {
		var values = [
			'5',
			5,
			true,
			undefined,
			null,
			NaN,
			function(){},
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				merge( value );
			};
		}
	});

	it( 'should throw an error if provided an array of < 2 elements', function test() {
		var data = [ 3 ];

		function foo(){
			merge( data );
		}

		expect( foo ).to.throw( Error );

	});

	it( 'should sort the array into ascending order', function test() {
		var data, expected;

		data = [ 14, -7, 4, 76, 30 ];
		expected = [ -7, 4, 14, 30, 76 ];

		// Apply merge sort, modifying data
		merge( data );

		for ( var i = 0; i < data.length; i++ ){
			assert.strictEqual( data[i], expected[i] );
		}

	});

});

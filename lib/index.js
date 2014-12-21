/**
*
*	SORT: merge
*
*
*	DESCRIPTION:
*		- Performs a merge sort on an unsorted array of numeric values.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Rebekah Smith.
*
*
*	AUTHOR:
*		Rebekah Smith. rebekahjs17@gmail.com. 2014.
*
*/

'use strict';

// FUNCTIONS //

/**
* FUNCTION: mergeSort( arr )
*	Sorts array elements into ascending order.
*
* @param {Array} arr - numeric array
*
* Modifies input array arr
*/
function mergeSort( arr ) {
	if ( !Array.isArray( arr ) ) {
		throw new TypeError( 'mergeSort()::invalid input argument. Must provide an array.' );
	}
	if ( arr.length < 2 ) {
		throw new Error( 'mergeSort()::invalid input argument. Array must contain at least 2 elements.' );
	}


	return;

} // end FUNCTION mergeSort()

// EXPORTS //

module.exports = mergeSort;


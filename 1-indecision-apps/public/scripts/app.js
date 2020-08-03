'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var varName = 'Name1';
var varName = 'Name2';
console.log('varName', varName);

var letName = 'Name1';
// let letName = 'Name2';
console.log('letName', letName);

var constName = 'Name1';
// const constName = 'Name2';
console.log('constName', constName);

/**
 * Block Scopping
 */

var fullname = 'Test Name';

if (fullname) {
    var _fullname$split = fullname.split(' '),
        _fullname$split2 = _slicedToArray(_fullname$split, 2),
        firstName = _fullname$split2[0],
        lastName = _fullname$split2[1];

    console.log('Inside block', firstName);
    console.log('Inside block', lastName);
}
console.log('Outside block', firstName);

var letFullname = 'Test Name';

if (letFullname) {
    var _letFullname$split = letFullname.split(' '),
        _letFullname$split2 = _slicedToArray(_letFullname$split, 2),
        letFirstName = _letFullname$split2[0],
        _lastName = _letFullname$split2[1];

    console.log('Inside block', letFirstName);
    console.log('Inside block', _lastName);
}

// exception
// console.log('Outside block', letFirstName)


var constFullname = 'Test Name';

if (constFullname) {
    var _constFullname$split = constFullname.split(' '),
        _constFullname$split2 = _slicedToArray(_constFullname$split, 2),
        constFirstName = _constFullname$split2[0],
        _lastName2 = _constFullname$split2[1];

    console.log('Inside block', constFirstName);
    console.log('Inside block', _lastName2);
}

// exception
// console.log('Outside block', constFirstName)

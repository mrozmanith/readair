////////////////////////////////////////////////////////////////////
// GRA.tagstatus
////////////////////////////////////////////////////////////////////

if (typeof GRA == "undefined") {var GRA = {};}

GRA.tagstatus = function(thePayload) {
	this.XMLdocument = LIB.dom.parseFromString(thePayload);
}

////////////////////////////////////////////////////////////////////
// GRA.tagstatus Getters/Setters
////////////////////////////////////////////////////////////////////

GRA.tagstatus.prototype = {
    tags: function() {
		// returns array of feed objects
		var nodes = LIB.dom.evaluateXPath(this.XMLdocument, "/object/object/list");
		return nodes;
	}
}
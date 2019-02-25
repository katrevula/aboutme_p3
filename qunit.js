function RectangleArea(num1,num2) {
    val1 = parseFloat(num1);
    val2 = parseFloat(num2);
    fToC = num1*num2;
    return fToC; 
  }

QUnit.test("RectangleArea", function(assert) {
	assert.equal(RectangleArea(5,4), 20, "length=5, breadth=4, area=20");
	assert.equal(RectangleArea(7,8), 56, "length=7, breadth=8, area=56");
	assert.equal(RectangleArea(5,10), 50, "length=5, breadth=10, area=50");
	assert.equal(RectangleArea(17,20), 340, "length=17, breadth=20, area=340");
	assert.equal(RectangleArea(26,18), 468, "length=26, breadth=18, area=468");
 });
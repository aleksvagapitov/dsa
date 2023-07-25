using DSA;
using NUnit.Framework;

namespace DSATests {
    public class LinkedListTests
    {
        [TestCase(2, 3)]
        public void TestStructure(int val1, int val2)
        {
            // Arrange
            var linkedList = new DSA.LinkedList<int>();

            // Act
            linkedList.Add(val1);
            linkedList.Add(val2);

            Assert.AreEqual(val1, linkedList.Head?.Value);
            Assert.AreEqual(val2, linkedList.Head?.Next?.Value);
        }
    }
}

function checkDuplicates() {
    var inputArray = document.getElementById("inputArray").value;
    var nums = inputArray.split(',').map(Number);

    var hasDuplicates = checkForDuplicates(nums);

    var resultElement = document.getElementById("result");
    resultElement.innerText = hasDuplicates ? "Duplicates found!" : "No duplicates found.";
  }

  function checkForDuplicates(nums) {
    var seen = {};

    for (var i = 0; i < nums.length; i++) {
      if (seen[nums[i]]) {
        return true;
      } else {
        seen[nums[i]] = true;
      }
    }

    return false;
  }
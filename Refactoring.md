# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

I chose to break the code into three parts, one if no event is provided, the other to set the partitionkey based on the event.partition key, and lastly to check if the candidate length is greater than the MAX_PARTITION_KEY_LENGTH. This way the same code can be executed with way less lines and with the if elses more consige, removing ifs inside other ifs. No event is provided the code already returns the TRIVIAL_PARTITION_KEY, saving time and memory (in this case it is a small quantity, but its is good to have this pattern because in other application a lot can be saved)

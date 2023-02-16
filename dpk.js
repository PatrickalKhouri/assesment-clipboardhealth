const crypto = require("crypto");

const dataToPartitionKey = (event) => {
  const data = JSON.stringify(event);
  return String(crypto.createHash("sha3-512").update(data).digest("hex"));
}

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  if (!event) {
    return TRIVIAL_PARTITION_KEY
  }

  event.partitionKey ? candidate = String(event.partitionKey) : candidate = dataToPartitionKey(event)
  
  candidate.length > MAX_PARTITION_KEY_LENGTH ? candidate = crypto.createHash("sha3-512").update(candidate).digest("hex"): null;

  return candidate
};
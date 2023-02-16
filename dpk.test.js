const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal '0' when given an empty string as an input", () => {
    const trivialKey = deterministicPartitionKey("");
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal '0' when given a 'false' as boolean as an input", () => {
      const trivialKey = deterministicPartitionKey(false);
      expect(trivialKey).toBe("0");
  });

  it("Returns the same partition key of event if it is under 256 charecters", () => {
    const event = {
      partitionKey: '154013cb8140c753f0ac358da6110fe237481b26c75c3ddc1b59eaf9dd7b46a0a3aeb2cef164b3c82d65b38a4e26ea9930b7b2cb3c01da4ba331c95e62ccb9c3'
    }
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("154013cb8140c753f0ac358da6110fe237481b26c75c3ddc1b59eaf9dd7b46a0a3aeb2cef164b3c82d65b38a4e26ea9930b7b2cb3c01da4ba331c95e62ccb9c3");
  });

  it("Returns the partition key  of under 256 charecters if a key of over 256 characters is provided", () => {
    const event = {
      partitionKey: '154013cb8140c753f0ac358da6110fe237481b26c75c3ddc1b59eaf9dd7b46a0a3aeb2cef164b3c82d65b38a4e26ea9930b7b2cb3c01da4ba331c95e62ccb9c3154013cb8140c753f0ac358da6110fe237481b26c75c3ddc1b59eaf9dd7b46a0a3aeb2cef164b3c82d65b38a4e26ea9930b7b2cb3c01da4ba331c95e62ccb9c32'
    }
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey.length).toBeLessThanOrEqual(256);
  });
});

import { validateApiKey } from "../validate.service";

describe("validateApiKey", () => {
  it("returns true if key is supplied", () => {
    expect(validateApiKey("AGDYEUEEEJDKD")).toEqual(true);
  });

  it("returns false if no key is supplied", () => {
    expect(validateApiKey()).toEqual(false);
  });
});

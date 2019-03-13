describe("Echo", function() {
  it("asks user for input", function() {
    spyOn(console, "log");
    Echo.prompt();
    expect(console.log).toHaveBeenCalledWith("Say something");
  });
});

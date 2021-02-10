describe("release pokemon", () => {
  it("should be able to release pokemon", () => {
    const pokemonBag = [
      {
        nickname: "thomas-test-pokemon",
        pokemonName: "charizard",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
      }
    ]
    cy.setLocalStorage("pokemonBag", JSON.stringify(pokemonBag))

    cy.visit("/")

    cy.findByText(/my bag/i).click()
    cy.findByText("thomas-test-pokemon").should("exist")

    cy.findByRole("listitem").within(() => {
      cy.findByRole("button", { name: /release pokemon/i }).click()
    })

    cy.findByRole("dialog").within(() => {
      cy.findByRole("button", { name: /release/i }).click()
      cy.findByText("thomas-test-pokemon").should("not.exist")
    })
  })
})

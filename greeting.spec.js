function Greeting(realnameservice) {
    this.realnameservice = realnameservice

    this.echo = (nickname) => {
        var firstname = realnameservice(nickname)
        return `Hello ${firstname}!`
    
    }
}


test('greeting', () => {
    //arrange
    
    const mockRealnameService = jest.fn().mockReturnValue('Weera')
    var app = new Greeting(mockRealnameService)



    //act
    var nickname = 'ball'
    var result = app.echo(nickname)



    //assert
    expect(mockRealnameService).toHaveBeenCalled()
    expect(mockRealnameService).toHaveBeenCalledWith(nickname)
    expect(result).toBe('Hello Weera!')



})
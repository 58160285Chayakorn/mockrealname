function BuuAuthen(facebookAuthen) {
    this.authen = facebookAuthen
    this.signIn = (username, password) => {
        var account = this.authen(username, password)

        return {

            name: account.name ,
            email: account.email ,
            token: '0000000000'
        }
    }

}





test ('singinwithfacebook', () => {
    //arrange
    const mockFacebookAuthen = jest.fn().mockReturnValue()
    var app = new BuuAuthen()

    //act
    var username = 'muskmelon1996'
    var password = '12345'
    var result = app.signIn(username, password)


    //assert
    expect(mockFacebookAuthen).toHaveBeenCalled()
    expect(mockFacebookAuthen).toHaveBeenLastCalledWith(nickname)
    

})
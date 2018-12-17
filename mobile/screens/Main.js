// ...

class Main extends Component {
  state = {
    showCurrentGameModal: false,
    showAddingModal: false,
  }

  handleAddPress = () => {
    this.props.navigation
  }

  renderAddingModal = () => {

  }

  render() {
    const { showCurrentGameModal, showAddingModal } = this.state

    return (
      <View style={styles.container}>
        <MapView />
        {showAddingModal && this.renderAddingModal()}
        {showCurrentGameModal && <CurrentGameModal />}
        <TouchableOpacity
          onPress={this.handleAddPress}
        >

        </TouchableOpacity>
      </View>
    )
  }
}

export default Main

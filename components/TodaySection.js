import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableNativeFeedback
} from 'react-native';
import { LinearGradient } from 'expo'
import TabBarIcon from './TabBarIcon'

export default class TodaySection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: true
        }
    }

    _handleXPress() {
        this.setState({ visible: false })
    }

    render() {
        return (
            <View>
                <View style={styles.container}>
                    <TabBarIcon
                        focused={this.props.focused}
                        name={this.props.iconName}
                        size={54}
                        color={this.props.color}
                    />
                    <Text style={styles.text}>{this.props.title}</Text>
                </View>

                {this.state.visible ?
                    <LinearGradient
                        style={styles.suggestedContainer}
                        colors={this.props.suggestedGradient || ['transparent', 'transparent']}
                        start={[0, 0]}
                        end={[1, 1]}>

                        <TouchableNativeFeedback
                            onPress={this._handleXPress.bind(this)}
                        >
                            <View
                                style={styles.xButton}>
                                <TabBarIcon
                                    name="md-close"
                                    size={12}
                                    color="black"
                                />
                            </View>
                        </TouchableNativeFeedback>

                        <Text style={styles.suggestedText}>SUGGESTED</Text>
                        <Text style={styles.suggestedTitle}>{this.props.suggestedTitle}</Text>
                    </LinearGradient>
                    : <View style={styles.suggestedContainer}></View>
                }
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 140,
        width: 140,
        borderRadius: 100,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        marginRight: 3,
        marginLeft: 3,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        marginTop: 5,
        color: 'white'
    },
    suggestedContainer: {
        position: 'relative',
        marginTop: 8,
        height: 140,
        width: 140,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    suggestedText: {
        marginTop: 20,
        fontSize: 11,
        letterSpacing: 1,
        fontWeight: 'bold'
    },
    suggestedTitle: {
        color: 'white',
        fontSize: 14,
        marginTop: 5,
        textAlign: 'center'
    },
    xButton: {
        position: 'absolute',
        top: 6,
        right: 6,
        width: 20,
        height: 20
    }
})
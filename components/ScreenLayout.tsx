import { ReactNode, useRef } from "react";
import { Animated, ScrollView, StyleSheet, View } from "react-native";
import { BlurView } from "expo-blur";

import { Colors } from "@/constants/Colors";

interface ScreenLayoutProps {
    text: string;
    children?: ReactNode;
}

export default function ScreenLayout({ text, children }: ScreenLayoutProps) {
    const scrollY = useRef(new Animated.Value(0)).current

    const opacity = scrollY.interpolate({
        inputRange: [30, 45],
        outputRange: [0, 1],
        extrapolate: "clamp"
    });
    const borderBottomWidth = scrollY.interpolate({
        inputRange: [30, 45],
        outputRange: [0, 1],
        extrapolate: "clamp"
    });
    const headerColor = scrollY.interpolate({
        inputRange: [30, 45],
        outputRange: [Colors.dark.text, Colors.dark.background],
        extrapolate: "clamp"
    });

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.headerSticky, { borderBottomWidth: borderBottomWidth }]}>
                <BlurView 
                    style={styles.headerStickyBlur}
                    intensity={10}
                >
                    <Animated.Text 
                        style={[styles.headerStickyText, { opacity: opacity }]}
                    >
                        {text}
                    </Animated.Text>
                </BlurView>
            </Animated.View>
            <ScrollView 
                contentContainerStyle={styles.scrollViewContent} 
                style={styles.scrollView}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: false }
                )}
                scrollEventThrottle={16}
            >
                <View style={styles.header}>
                    <Animated.Text 
                        style={[styles.headerText, { color: headerColor }]}
                    >
                        {text}
                    </Animated.Text>
                </View>
                {children}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.dark.background,
        flex: 1,
    },
    headerSticky: {
        backgroundColor: "transparent",
        borderBottomColor: Colors.dark.outline,
        height: 85,
        left: 0,
        position: "absolute",
        right: 0,
        top: 0,
        zIndex: 1,
    },
    headerStickyBlur: {
        alignItems: "center",
        display: "flex",
        height: "100%",
        justifyContent: "flex-end",
        paddingBottom: 10,
        width: "100%", 
    },
    headerStickyText: {
        color: Colors.dark.text,
        fontSize: 18,
        fontWeight: "600",
    },
    scrollView: {
        backgroundColor: Colors.dark.background,
        flex: 1,
    },
    scrollViewContent: {
        paddingTop: 100,
    },
    header: {
        height: 75,
    },
    headerText: {
        fontSize: 28,
        fontWeight: "800",
    }
});
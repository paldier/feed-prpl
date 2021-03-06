#!/bin/sh

#for RX40 platform, wlan0 and wlan2 are used instead of the defualt wlan0 and wlan1
#sta ifaces are wlan1 and wlan3
if grep -q GRX /tmp/sysinfo/board_name; then
        uci set prplmesh.radio1.hostap_iface="wlan2"
        uci set prplmesh.radio1.hostap_iface_steer_vaps="wlan2.0"
        uci set prplmesh.radio0.sta_iface="wlan1"
        uci set prplmesh.radio1.sta_iface="wlan3"
        uci commit prplmesh
fi

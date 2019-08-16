include $(TOPDIR)/rules.mk

PKG_NAME:=udrone
PKG_RELEASE:=1

PKG_SOURCE_URL=$(GITHUB)/blogic/udrone.git
PKG_SOURCE_PROTO:=git
PKG_SOURCE_DATE:=2019-08-16
PKG_SOURCE_VERSION:=9a572a4fe8c3659584bf19d9c8c479613ad55aef

PKG_MAINTAINER:=John Crispin <john@phrozen.org>
PKG_LICENSE:=GPL-2.0+

include $(INCLUDE_DIR)/package.mk
include $(INCLUDE_DIR)/cmake.mk

define Package/udrone
  SECTION:=utils
  CATEGORY:=Utilities
  TITLE:=OpenWrt QA Daemon
  DEPENDS:=+libjson-c +libubox +libblobmsg-json +libubus +libuci
endef

TARGET_CFLAGS += -I$(STAGING_DIR)/usr/include

define Package/udrone/install
	$(INSTALL_DIR) $(1)/usr/sbin
	$(INSTALL_BIN) $(PKG_BUILD_DIR)/udrone $(1)/usr/sbin/
endef

$(eval $(call BuildPackage,udrone))

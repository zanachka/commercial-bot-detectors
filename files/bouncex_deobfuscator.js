const { RefactorSession } = require('shift-refactor');
const { parseScript } = require('shift-parser');
const Shift = require('shift-ast');

const fileContents = require('fs').readFileSync('./bouncex.js', 'utf8');

const tree = parseScript(fileContents);

const refactor = new RefactorSession(tree);

/*
String deobfuscation functions, copied from bouncex.js
*/
var _0x53ec = [
  'dHJ5TG9j',
  'YnJlYWs=',
  'Y29udGludWU=',
  'Y29tcGxldGU=',
  'aWxsZWdhbCBjYXRjaCBhdHRlbXB0',
  'cmV0dXJuIHRoaXM=',
  'YXNzaWdu',
  'ZGl2',
  'Q2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVl',
  'YWJjZGVmZ2hpamtsbW5vcHFyc3Q=',
  'SUVfUFJPVE8=',
  'bWF4',
  'bWlu',
  'Z2V0T3duUHJvcGVydHlTeW1ib2xz',
  'UHJvbWlzZQ==',
  'Y2hhckNvZGVBdA==',
  'c3R5bGU=',
  'ZGlzcGxheQ==',
  'bm9uZQ==',
  'amF2YXNjcmlwdDo=',
  'Y29udGVudFdpbmRvdw==',
  'd3JpdGU=',
  'PHNjcmlwdD5kb2N1bWVudC5GPU9iamVjdDwvc2NyaXB0Pg==',
  'ZGVmaW5lUHJvcGVydGllcw==',
  'Z2V0UHJvdG90eXBlT2Y=',
  'VHlwZUVycm9y',
  'ZmFpbA==',
  'ZG9tYWlu',
  'ZW50ZXI=',
  'ZXhpdA==',
  'ZW1pdA==',
  'dW5oYW5kbGVkUmVqZWN0aW9u',
  'VW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9u',
  'cmVqZWN0aW9uSGFuZGxlZA==',
  'b25yZWplY3Rpb25oYW5kbGVk',
  'YWxs',
  'IGlzIG5vdCBpdGVyYWJsZSE=',
  'QlJFQUs=',
  'UkVUVVJO',
  'TXV0YXRpb25PYnNlcnZlcg==',
  'Y3JlYXRlVGV4dE5vZGU=',
  'b2JzZXJ2ZQ==',
  'Yy5taW4uanM=',
  'ZGF0YXNldA==',
  'Z2V0RWxlbWVudEJ5SWQ=',
  'Yy5qcw==',
  'c2NyaXB0W3NyYyo9ImlkPWMuanMiXQ==',
  'aWQ9Yy5qcw==',
  'cGFyc2VTY3JpcHQ=',
  'Z2V0SXRlcmF0b3I=',
  'SlNPTg==',
  'c3RyaW5naWZ5',
  'ZnJvbQ==',
  'bmV0',
  'cmVwbGFjZQ==',
  'YT1jYW5kaWRhdGU=',
  'aG9zdA==',
  'UlRDSWNlR2F0aGVyZXI=',
  'Z2V0TmV0LU1TLW9uZXJyb3I=',
  'b25sb2NhbGNhbmRpZGF0ZQ==',
  'd2Via2l0UlRDUGVlckNvbm5lY3Rpb24=',
  'UlRDUGVlckNvbm5lY3Rpb24=',
  'bW96UlRDUGVlckNvbm5lY3Rpb24=',
  'Z2V0TmV0LW9uZXJyb3I=',
  'Y2FuZGlkYXRl',
  'bmV0Q29tcGxldGU=',
  'T0JTX0VO',
  'aXNJT1NXZWJWaWV3',
  'SURTdGFnZVByZWZpcmU=',
  'c2VuZFJlcXVlc3RUb0lE',
  'b3B0T3V0WU9D',
  'WU9DX0VSUk9SX01FU1NBR0U=',
  'SURfR0VOX0ZBSUxFRA==',
  'Y2F0Y2g=',
  'Z2V0T2JzZXJ2ZXI=',
  'T0JTX0RPTUFJTlM=',
  'aHR0cHM6Ly8=',
  'LmNkbmJhc2tldC5uZXQ=',
  'UkVRX1RJTUVPVVQ=',
  'b2JzUmVx',
  'dGFn',
  'b2xkSUQx',
  'b2xkSUQ=',
  'bmV3SUQx',
  'bmV3SUQ=',
  'UkVRX0NPVU5U',
  'SUQy',
  'SURfTEVOR1RI',
  'SURfVVJM',
  'P2Nvb2tpZUlEPQ==',
  'JnY9',
  'JlNDSDE9',
  'JkdDUzE9',
  'JkdDUzI9',
  'JnBlPQ==',
  'aXNBcnJheQ==',
  'Y2FudmFz',
  'Z2V0Q29udGV4dA==',
  'V0VCR0xfZGVidWdfcmVuZGVyZXJfaW5mbw==',
  'Z2V0UGFyYW1ldGVy',
  'VU5NQVNLRURfUkVOREVSRVJfV0VCR0w=',
  'aGVpZ2h0',
  'MzIweDU2OA==',
  'aVBob25l',
  'NzY4eDEwMjQ=',
  'aVBhZA==',
  'QWly',
  'aVBvZA==',
  'Mzc1eDY2Nw==',
  'NDE0eDczNg==',
  'UGx1cw==',
  'QThY',
  'QWlyMg==',
  'QTlY',
  'UHJvOS43',
  'MTAyNHgxMzY2',
  'UHJvMTIuOQ==',
  'QTEw',
  'QTEwWA==',
  'ODM0eDExMTI=',
  'UHJvMTAuNQ==',
  'QTEx',
  'QTEy',
  'Mzc1eDgxMg==',
  'WFNNYXg=',
  'QTEyWA==',
  'UHJvMTE=',
  'UG93ZXJWUiBTR1ggNTM1',
  'UG93ZXJWUiBTR1ggNTQz',
  'MzIweDQ4MA==',
  'VG91Y2g1',
  'UG93ZXJWUiBTR1ggNTU0',
  'd3NpZA==',
  'YnhkaWQ=',
  'Ynh2aWQ=',
  'ZGF0YUZvclBpeGVsRmlyaW5nSXNWYWxpZA==',
  'ZmlyZVBpeGVscw==',
  'Ynh3aWQ=',
  'ZmlyZVBhcnRuZXJQaXhlbA==',
  'ZmlyZUdyYXBo',
  'ZmlyZVNvZnRJRFN5bmM=',
  'YnhpbmZv',
  'UElYRUxfVVJM',
  'P0NJRD0=',
  'Jml2PQ==',
  'JmRldmljZWlkPQ==',
  'JnZpc2l0aWQ9',
  'VVNFUl9VUkw=',
  'JmJ4ZGlkPQ==',
  'JmJ4dmlkPQ==',
  'JmJ4d2lkPQ==',
  'JmdtPQ==',
  'JmFwaWtleT0=',
  'ZXhwb3J0cw==',
  'Y2FsbA==',
  'ZGVmaW5lUHJvcGVydHk=',
  'X19lc01vZHVsZQ==',
  'ZGVmYXVsdA==',
  'cHJvdG90eXBl',
  'aGFzT3duUHJvcGVydHk=',
  'dW5kZWZpbmVk',
  'TWF0aA==',
  'd2tz',
  'U3ltYm9s',
  'ZnVuY3Rpb24=',
  'U3ltYm9sLg==',
  'c3RvcmU=',
  'Mi41LjE=',
  'bnVtYmVy',
  'IGlzIG5vdCBhbiBvYmplY3Qh',
  'cGFyc2U=',
  'bG9jYXRpb24=',
  'QVBJS0VZ',
  'YXBpa2V5',
  'd2FycHNwZWVk',
  'R01fRU4=',
  'UElYX0VO',
  'RVhQX0VO',
  'ZGV2',
  'ZXh0ZXJuYWxpZA==',
  'REVNT19FTg==',
  'Ynh0ZXN0',
  'VkVSQk9TRV9FTg==',
  'dmVyYm9zZQ==',
  'Q0xJRU5UX0NC',
  'QURfQ0I=',
  'YWRjYg==',
  'SURTX09OTFlfQ0I=',
  'aWRzb25seWNi',
  'U09VUkNF',
  'c3Jj',
  'QlhfSU5GTw==',
  'Ym91bmNleA==',
  'd2Vic2l0ZQ==',
  'bGVuZ3Ro',
  'YXBwbHk=',
  'dmlydHVhbA==',
  'ZGF0YQ==',
  'dmlldw==',
  'aHR0cHM6Ly9pZHMuY2Rud2lkZ2V0LmNvbQ==',
  'bmF2aWdhdG9y',
  'dXNlckFnZW50',
  'aG9zdG5hbWU=',
  'QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLw==',
  'c3BsaXQ=',
  'c2xpY2U=',
  'am9pbg==',
  'Y29va2ll',
  'aW5kZXhPZg==',
  'O2V4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMCBVVEM=',
  'dGVzdA==',
  'Ym91bmNleC5jb20=',
  'REVWX0VO',
  'YXR0YWNoRXZlbnQ=',
  'YWRkRXZlbnRMaXN0ZW5lcg==',
  'X19pZGNvbnRleHQ=',
  'YnhncmFwaEdEUFJPcHRPdXQ=',
  'aHR0cHM6Ly91LmNkbndpZGdldC5jb20=',
  'aHR0cHM6Ly9ldmVudHMuY2Rud2lkZ2V0LmNvbQ==',
  'aHR0cHM6Ly9waXguY2Rud2lkZ2V0LmNvbQ==',
  'aHR0cHM6Ly9lLmNkbndpZGdldC5jb20=',
  'cmVkaXJlY3Q=',
  'aWQtc2VydmljZQ==',
  'SUQgZ2VuZXJhdGlvbiBlcnJvcg==',
  'Q2FsbGJhY2sgZXJyb3I=',
  'SUQgZ2VuZXJhdGlvbiBmYWlsZWQ=',
  'VXNlciBpcyBvcHRlZC1vdXQgd2l0aCBHRFBS',
  'V2FybmluZw==',
  'VXNlciBpcyBvcHRlZC1vdXQgd2l0aCBZT0M=',
  'bWF0Y2g=',
  'dXNhZ2U=',
  'VXNlciBpcyBvcHRlZC1vdXQgd2l0aCBJQUIgQ29uc2VudCBGcmFtZXdvcms=',
  'c2Vzc2lvblN0b3JhZ2VMb2Fk',
  'R1JBUEhfRU4=',
  'U0NSSVBUX1ZFUlNJT04=',
  'Z2V0TG9nVmFsdWU=',
  'bG9nT2JqZWN0',
  'Z2V0',
  'c2V0',
  'QWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQh',
  'dmFsdWU=',
  'ZG9uZQ==',
  'cmVzb2x2ZQ==',
  'dGhlbg==',
  'dGhyb3c=',
  'bmV4dA==',
  'c3RyaW5n',
  'c3RhY2s=',
  'L2Nqcy1sb2dnZXI/c291cmNlPQ==',
  'JnNldmVyaXR5PQ==',
  'YnhncmFwaA==',
  'SURz',
  'JmRldmljZUlEPQ==',
  'JkJYV0lEPQ==',
  'JndhcnBzcGVlZD0=',
  'bG9hZElE',
  'JnZlcnNpb249',
  'ZGVidWc=',
  'REVCVUcg',
  'V0FSTklORw==',
  'SU5GTw==',
  'bWV0YQ==',
  'ZXJyb3Jz',
  'cHVzaA==',
  'bXNDcnlwdG8=',
  'bm93',
  'c3RvcHdhdGNo',
  'c3RhcnRUaW1l',
  'dGltaW5n',
  'YWRkRXZlbnQ=',
  'TElTVEVOX0ZPUl9FVkVOVA==',
  'SUZfSVNfT0xEX0lF',
  'dHJpZ2dlckNsaWVudENhbGxiYWNr',
  'cG9w',
  'Zm9yRWFjaA==',
  'ZGVmaW5lQ2FsbGJhY2tTY2hlbWE=',
  'Y29uZGl0aW9uYWxDYlRyeUNhdGNo',
  'YnhER1Rlc3Q=',
  'cmFuZG9t',
  'ZGV2aWNlSUQ=',
  'Y29va2llSUQ=',
  'aW5mbw==',
  'b3B0T3V0TkFJ',
  'UEVfRU4=',
  'aWRHZW5FcnJvcg==',
  'Q0JfRVJST1I=',
  'R0RQUl9FUlJPUl9NRVNTQUdF',
  'SU5WQUxJRF9UUkFGRklDX01FU1NBR0U=',
  'SURfR0VOX0VSUk9S',
  'bWFrZVJlcXVlc3Q=',
  'cmVhZHlTdGF0ZQ==',
  'RVhQRUNURURfU1RBVFVTX0NPREVT',
  'c3RhdHVz',
  'cmVzcG9uc2VUZXh0',
  'c3RhdHVzVGV4dA==',
  'ZXJyb3I=',
  'cmVwb3J0V2FybmluZw==',
  'UmVxdWVzdCBwYXJzZSBlcnJvcjog',
  'b250aW1lb3V0',
  'SURfU0VSVklDRV9UQUc=',
  'aWQtc2VydmljZS10aW1lb3V0',
  'aXNPbmVQZXJjZW50Um9sbA==',
  'cmVwb3J0SW5mbw==',
  'UmVxdWVzdCB0aW1lb3V0OiA=',
  'b25lcnJvcg==',
  'aWQtc2VydmljZS1lcnJvcg==',
  'UmVxdWVzdCBlcnJvcjog',
  'd2l0aENyZWRlbnRpYWxz',
  'b3Blbg==',
  'R0VU',
  'dGltZW91dA==',
  'c2VuZA==',
  'dGltZWRQcm9taXNl',
  'YmluZA==',
  'cmFjZQ==',
  'cmVwb3J0RXJyb3I=',
  'RVJST1I=',
  'Z2V0QlhJbmZv',
  'bWFyaw==',
  'd3JhcA==',
  'cHJldg==',
  'Qk9VTkNFWF9BUElLRVk=',
  'YWJydXB0',
  'cmV0dXJu',
  'ZGlk',
  'dmlk',
  'QlhfSU5GT19JTlRFUlZBTA==',
  'ZGlkbnQgZmluaXNo',
  'QlhfSU5GT19USU1FT1VU',
  'ZW5k',
  'c3RvcA==',
  'aXNCYXNlNjQ=',
  'aXNPcHRlZE91dFZpYUdEUFJDb25zZW50',
  'Z2V0VmVuZG9yQ29uc2VudHM=',
  'Q09OU0VOVF9WRU5ET1JfSUQ=',
  'dHJ1ZQ==',
  'Z2RwckFwcGxpZXM=',
  'dmVuZG9yQ29uc2VudHM=',
  'cHVycG9zZUNvbnNlbnRz',
  'Z2VuZXJhdGVMb2FkSUQ=',
  'QUJDREVGR0hJSktMTU5QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OQ==',
  'Z2V0UmFuZG9tVmFsdWVz',
  'Y2hhckF0',
  'ZmlyZUNsaWVudEFuYWx5dGljcw==',
  'RVZFTlRTX1VSTA==',
  'L3BpeGVsLnBuZz90eXBlPWNhJnN1YnR5cGU9',
  'RVhURVJOQUxfSUQ=',
  'JmxvYWRJRD0=',
  'Z2V0RnV0dXJlRGF0ZUluRGF5cw==',
  'IGlzIG5vdCBhIGZ1bmN0aW9uIQ==',
  'dG9TdHJpbmc=',
  'Y3JlYXRlRWxlbWVudA==',
  'Q2FuJ3QgY2FsbCBtZXRob2Qgb24gIA==',
  'Zmxvb3I=',
  'a2V5cw==',
  'U3RyaW5n',
  'aXRlcmF0b3I=',
  'Z2V0SXRlcmF0b3JNZXRob2Q=',
  'QEBpdGVyYXRvcg==',
  'cHJvbWlzZQ==',
  'QmFkIFByb21pc2UgY29uc3RydWN0b3I=',
  'cmVqZWN0',
  'cHJvcGVydHlJc0VudW1lcmFibGU=',
  'X19jb3JlLWpzX3NoYXJlZF9f',
  'U3ltYm9sKA==',
  'Y29uY2F0',
  'Y29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9m',
  'IEl0ZXJhdG9y',
  'dmFsdWVz',
  'QXJyYXk=',
  'ZW50cmllcw==',
  'bmFtZQ==',
  'ZG9jdW1lbnQ=',
  'ZG9jdW1lbnRFbGVtZW50',
  'dG9TdHJpbmdUYWc=',
  'Q1NTUnVsZUxpc3QsQ1NTU3R5bGVEZWNsYXJhdGlvbixDU1NWYWx1ZUxpc3QsQ2xpZW50UmVjdExpc3QsRE9NUmVjdExpc3QsRE9NU3RyaW5nTGlzdCxET01Ub2tlbkxpc3QsRGF0YVRyYW5zZmVySXRlbUxpc3QsRmlsZUxpc3QsSFRNTEFsbENvbGxlY3Rpb24sSFRNTENvbGxlY3Rpb24sSFRNTEZvcm1FbGVtZW50LEhUTUxTZWxlY3RFbGVtZW50LE1lZGlhTGlzdCxNaW1lVHlwZUFycmF5LE5hbWVkTm9kZU1hcCxOb2RlTGlzdCxQYWludFJlcXVlc3RMaXN0LFBsdWdpbixQbHVnaW5BcnJheSxTVkdMZW5ndGhMaXN0LFNWR051bWJlckxpc3QsU1ZHUGF0aFNlZ0xpc3QsU1ZHUG9pbnRMaXN0LFNWR1N0cmluZ0xpc3QsU1ZHVHJhbnNmb3JtTGlzdCxTb3VyY2VCdWZmZXJMaXN0LFN0eWxlU2hlZXRMaXN0LFRleHRUcmFja0N1ZUxpc3QsVGV4dFRyYWNrTGlzdCxUb3VjaExpc3Q=',
  'QXJndW1lbnRz',
  'VW5kZWZpbmVk',
  'T2JqZWN0',
  'c3BlY2llcw==',
  'Y29uc3RydWN0b3I=',
  'cHJvY2Vzcw==',
  'Y2xlYXJJbW1lZGlhdGU=',
  'RGlzcGF0Y2g=',
  'bmV4dFRpY2s=',
  'cG9ydDI=',
  'cG9ydDE=',
  'aW1wb3J0U2NyaXB0cw==',
  'bWVzc2FnZQ==',
  'YXBwZW5kQ2hpbGQ=',
  'b25yZWFkeXN0YXRlY2hhbmdl',
  'cmVtb3ZlQ2hpbGQ=',
  'X2VuY29kZUZvclN0b3JhZ2U=',
  'OyBleHBpcmVzPQ==',
  'OyBwYXRoPS87IGRvbWFpbj0=',
  'SE9TVA==',
  'X2dldENvb2tpZQ==',
  'KF58Oylccyo=',
  'X2RlY29kZUZvclJldHJldmlhbA==',
  'ZGVsZXRlQ29va2ll',
  'PTsgZXhwaXJlcz1UaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAxIEdNVDsgcGF0aD0vOyBkb21haW49Lg==',
  'X2dldExvY2FsU3RvcmFnZQ==',
  'bG9jYWxTdG9yYWdl',
  'X3NldExvY2FsU3RvcmFnZQ==',
  'c2Vzc2lvblN0b3JhZ2U=',
  'c3RvcmVJRERhdGE=',
  'bWFzdGVySURz',
  'X3NldENvb2tpZQ==',
  'U1RPUkFHRV9LRVk=',
  'Q0xJRU5UX1NQRUNJRklDX1NUT1JBR0VfS0VZ',
  'X3NldFNlc3Npb25TdG9yYWdl',
  'RklWRV9ZRUFSU19BTkRfVFdPX0RBWVM=',
  'Z2V0U2Vzc2lvbkRhdGE=',
  'X2dldFNlc3Npb25TdG9yYWdl',
  'U0VTU0lPTl9TVE9SQUdFX0xPQUQ=',
  'Z2V0U2Vzc2lvbkRhdGEtc2Vzc2lvblN0b3JhZ2U=',
  'Z2V0T3B0T3V0',
  'Z2V0TG9jYWxTdG9yYWdlSURz',
  'Z2V0U3RvcmVkTWFzdGVySURz',
  'aW5kZXhlZERC',
  'bW96SW5kZXhlZERC',
  'd2Via2l0SW5kZXhlZERC',
  'cmVxdWVzdEZpbGVTeXN0ZW0=',
  'VEVNUE9SQVJZ',
  'aXNGaXJlZm94',
  'b25zdWNjZXNz',
  'aXNTYWZhcmk=',
  'aXNNaWNyb3NvZnQ=',
  'c2V0SXRlbQ==',
  'b3BlbkRhdGFiYXNl',
  'ZGV0ZWN0UE0=',
  'b3RoZXI=',
  'ZmlyZWZveA==',
  'b3BlcmE=',
  'Y2hyb21l',
  'c2FmYXJp',
  'dHJpZGVudA==',
  'b3By',
  'dG9Tb3VyY2U=',
  'b3NjcHU=',
  'dG9Mb3dlckNhc2U=',
  'd2luZG93cyBwaG9uZQ==',
  'd2luZG93cw==',
  'YW5kcm9pZA==',
  'bGludXg=',
  'aXBob25l',
  'aXBhZA==',
  'bWFj',
  'aW9z',
  'd2lu',
  'cGlrZQ==',
  'cGx1Z2lucw==',
  'bXNNYXhUb3VjaFBvaW50cw==',
  'Y3JlYXRlRXZlbnQ=',
  'VG91Y2hFdmVudA==',
  'bGFuZ3VhZ2U=',
  'bGFuZ3VhZ2Vz',
  'c3Vic3Ry',
  'c2NyZWVu',
  'd2lkdGg=',
  'bXNEb05vdFRyYWNr',
  'ZG9Ob3RUcmFjaw==',
  'Z2V0VGltZXpvbmVPZmZzZXQ=',
  'YWdlbnQ=',
  'ZGV2aWNl',
  'Z2V0RGV2aWNlVHlwZQ==',
  'Zmlyc3RMb2Fk',
  'Z2V0Q3VycmVudFNjcmlwdA==',
  'aW5pdGlhbGl6ZQ==',
  'bWFpbg==',
  'RVhQT1NFX1JFU0VU',
  'YnhncmFwaFJlc2V0',
  'cmVzZXQ=',
  'X19jbXA=',
  'SURzT25seUNC',
  'SURzT25seUNCOiA=',
  'VVNBR0VfQU5BTFlUSUNT',
  'ZXh0ZXJuYWxJRA==',
  'TUFUQ0hfQU5BTFlUSUNT',
  'YnVpbGRJbmZv',
  'c2VudA==',
  'SURTdGFnZQ==',
  'Y3VzdG9tRXJyb3JNZXNzYWdl',
  'R0RQUl9PUFRPVVRfSURFTlRJRklFUg==',
  'SURzUmVjZWl2ZWQ=',
  'SURzLXJlY2VpdmVkOiA=',
  'b3B0T3V0R0RQUg==',
  'aWRzLWNhdGNoLWFsbA==',
  'dXNlclN0YWdl',
  'dXNlci1jYXRjaC1hbGw=',
  'cmVnZW5lcmF0b3JSdW50aW1l',
  'Z2V0T3duUHJvcGVydHlOYW1lcw==',
  'X2ludm9rZQ==',
  'bm9ybWFs',
  'YXJn',
  'b2JqZWN0',
  'X19hd2FpdA==',
  'bWV0aG9k',
  'X3NlbnQ=',
  'ZGlzcGF0Y2hFeGNlcHRpb24=',
  'dHlwZQ==',
  'VGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZA==',
  'ZGVsZWdhdGU=',
  'Y2F0Y2hMb2M=',
  'ZmluYWxseUxvYw==',
  'YWZ0ZXJMb2M=',
  'dHJ5RW50cmllcw==',
  'Y29tcGxldGlvbg==',
  'cm9vdA==',
  'c3VzcGVuZGVkU3RhcnQ=',
  'ZXhlY3V0aW5n',
  'Y29tcGxldGVk',
  'Y3JlYXRl',
  'ZGlzcGxheU5hbWU=',
  'aXNHZW5lcmF0b3JGdW5jdGlvbg==',
  'R2VuZXJhdG9yRnVuY3Rpb24=',
  'c2V0UHJvdG90eXBlT2Y=',
  'X19wcm90b19f',
  'YXdyYXA=',
  'QXN5bmNJdGVyYXRvcg==',
  'YXN5bmM=',
  'W29iamVjdCBHZW5lcmF0b3Jd',
  'cmV2ZXJzZQ=='
];
(function(a, c) {
  var b = function(b) {
    while (--b) {
      a['push'](a['shift']());
    }
  };
  b(++c);
})(_0x53ec, 153);
var _0xc53e = function(b, d) {
  b = b - 0;
  var a = _0x53ec[b];
  if (_0xc53e['initialized'] === undefined) {
    (function() {
      var b = function() {
        var a;
        try {
          a = Function(
            'return (function() ' + '{}.constructor("return this")( )' + ');'
          )();
        } catch (b) {
          a = window;
        }
        return a;
      };
      var a = b();
      var c =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
      a['atob'] ||
        (a['atob'] = function(h) {
          var f = String(h)['replace'](/=+$/, '');
          for (
            var b = 0, d, a, g = 0, e = '';
            (a = f['charAt'](g++));
            ~a && ((d = b % 4 ? d * 64 + a : a), b++ % 4)
              ? (e += String['fromCharCode'](255 & (d >> ((-2 * b) & 6))))
              : 0
          ) {
            a = c['indexOf'](a);
          }
          return e;
        });
    })();
    _0xc53e['base64DecodeUnicode'] = function(e) {
      var b = atob(e);
      var c = [];
      for (var a = 0, d = b['length']; a < d; a++) {
        c += '%' + ('00' + b['charCodeAt'](a)['toString'](16))['slice'](-2);
      }
      return decodeURIComponent(c);
    };
    _0xc53e['data'] = {};
    _0xc53e['initialized'] = !![];
  }
  var c = _0xc53e['data'][b];
  if (c === undefined) {
    a = _0xc53e['base64DecodeUnicode'](a);
    _0xc53e['data'][b] = a;
  } else {
    a = c;
  }
  return a;
};
/* End copied string deobfuscation functions */

refactor.replaceRecursive(
  `CallExpression[callee.type="IdentifierExpression"][callee.name="_0xc53e"][arguments.length=1][arguments.0.type="LiteralStringExpression"]`,

  node => {
    return new Shift.LiteralStringExpression({
      value: _0xc53e(node.arguments[0].value),
    });
  }
);
console.log("/* Replaced all array references with real value */")


refactor.expandBoolean();
// refactor.convertComputedToStatic();
// refactor.normalizeIdentifiers();
console.log("/* This file is the result of running `node bouncex_deobfuscator.js > bouncex_deobfuscated.js` */");
console.log(refactor.print());
